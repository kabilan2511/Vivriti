import { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import Cards from "../Card/Card.js";

const ProductList = () => {
  const [productCategory, setProductCategory] = useState([]);
  const [products, setProducts] = useState([]);
  console.log("products", products);
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      console.log(res.data);
      setProductCategory(res.data);
    });
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res);
      setProducts(res.data.products);
    });
  }, []);
  return (
    <div className="product-list">
      <select className="select-category">
        <option value="" disabled selected>
          Select Category...
        </option>
        {productCategory.map((data) => {
          return <option>{data}</option>;
        })}
      </select>
      <div className="product-cards">
        {products.map((product, ind) => (
          <Cards
            key={ind}
            imageUrl={product.images[0]}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
