import { MdClose } from "react-icons/md";
import proImg from "../../../assets/products/earbuds-prod-1.webp";
import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  useFetch  from "../../../hooks/useFetch";
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navi = useNavigate();

  const onChange = (event) => {
    setQuery(event.target.value);
  }; 

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if(!query.length){
    data = null;
  }

  return (
    <div className="search-main-content">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search What you want"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {data?.data?.map(items => (
          <div key={items.id} className="search-item" onClick={() => {
            navi("/product/" + items.id)
            setShowSearch(false)
          }}>
            <div className="img-container">
              <img src={process.env.REACT_APP_DEV_URL +
                items.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="pro-detail">
              <span className="name">{items.attributes.title}</span>
              <span className="desc">{items.attributes.desc}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
