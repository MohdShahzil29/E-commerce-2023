import { useNavigate } from "react-router-dom";
import "./Product.scss";
const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="products-card" onClick={()=> navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          alt=""
        />
      </div>
      <div className="pro-detail">
        <span className="pro-name">{data.title}</span>
        <span className="pro-price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
