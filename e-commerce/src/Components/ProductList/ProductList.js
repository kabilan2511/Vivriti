import { useEffect, useMemo, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import Cards from "../Card/Card.js";
import Footer from "../Footer/Footer.js";

const ProductList = () => {
  const [productCategory, setProductCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  console.log("products", products);
  console.log("selectedValue", selectedValue);

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

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

  useEffect(() => {
    let categoryUrl = `https://dummyjson.com/products/category/${selectedValue}`;
    console.log(categoryUrl);
    if (selectedValue) {
      axios.get(categoryUrl).then((res) => {
        setProducts(res.data.products);
      });
    }
  }, [selectedValue]);

  return (
    <div className="product-list">
      <select className="select-category" onChange={handleDropdownChange}>
        <option value="" disabled selected>
          Select Category...
        </option>
        {productCategory.map((data) => {
          return <option>{data}</option>;
        })}
      </select>
      <div className="product-cards">
        {currentItems.map((product, ind) => (
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
      <div className="pagination">
        {products.length > itemsPerPage && (
          <>
            <button onClick={handlePrevClick} disabled={currentPage === 1}>
              Previous
            </button>
            <ul>
              {Array(Math.ceil(products.length / itemsPerPage))
                .fill()
                .map((_, i) => (
                  <li key={i}>
                    <button onClick={() => handlePageChange(i + 1)}>
                      {i + 1}
                    </button>
                  </li>
                ))}
            </ul>
            <button
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
