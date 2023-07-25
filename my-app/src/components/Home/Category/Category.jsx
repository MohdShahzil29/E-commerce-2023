import "./Category.scss";
import { useNavigate } from "react-router-dom";
const Category = ({ category }) => {
  const navigat = useNavigate();
  return (
    <div className="item-category">
      <div className="categiries">
        {category?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigat(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.Img.data.attributes.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
