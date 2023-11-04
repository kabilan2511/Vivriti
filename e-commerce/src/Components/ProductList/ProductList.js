import { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import Cards from "../Card/Card.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProductList = (props) => {
  const { searchWord } = props;
  const [productCategory, setProductCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log("products", products);
  console.log("selectedValue", selectedValue);
  console.log("searchWord", searchWord);

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
    // setIsLoading(true);
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      console.log(res.data);
      setProductCategory(res.data);
      setIsLoading(false);
    });
    if (searchWord.length === 0 || selectedValue.length === 0) {
      axios.get("https://dummyjson.com/products").then((res) => {
        console.log(res);
        setProducts(res.data.products);
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (selectedValue.length > 0) {
      let categoryUrl = `https://dummyjson.com/products/category/${selectedValue}`;
      console.log(categoryUrl);
      axios.get(categoryUrl).then((res) => {
        setProducts(res.data.products);
        setIsLoading(false);
      });
    }
    if (searchWord.length > 0) {
      let categorySearchUrl = `https://dummyjson.com/products/search?q=${searchWord}`;
      console.log(categorySearchUrl);
      axios.get(categorySearchUrl).then((res) => {
        setProducts(res.data.products);
        setIsLoading(false);
      });
    }
  }, [selectedValue, searchWord]);

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
      {isLoading ? (
        <>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        </>
      ) : products.length ? (
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
      ) : (
        <p style={{ color: "red", display: "flex", justifyContent: "center" }}>
          No products found.
        </p>
      )}
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
    </div>
  );
};

export default ProductList;
