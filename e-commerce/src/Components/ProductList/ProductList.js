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

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  console.log("currentItems", currentItems);

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

  const searchInCategory = (products) => {
    return products.filter((data) => {
      let title = data.title.toLowerCase();
      let result = title.includes(searchWord.toLowerCase());
      console.log("filter", result);
      return result;
    });
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setProductCategory(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    let apiUrl = "https://dummyjson.com/products";
    if (selectedValue.length > 0) {
      apiUrl = `https://dummyjson.com/products/category/${selectedValue}`;
    } else if (searchWord) {
      apiUrl = `https://dummyjson.com/products/search?q=${searchWord}`;
    }

    axios
      .get(apiUrl)
      .then((res) => {
        let fetchedProducts = res.data.products;

        if (selectedValue.length > 0) {
          fetchedProducts = searchInCategory(fetchedProducts);
        }

        const newTotalPages = Math.ceil(fetchedProducts.length / itemsPerPage);

        if (currentPage > newTotalPages) {
          setCurrentPage(1);
        }

        setProducts(fetchedProducts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, [currentPage, selectedValue, searchWord]);

  return (
    <div className="product-list">
      <select className="select-category" onChange={handleDropdownChange}>
        <option value="" selected>
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
              {"<"}
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
              {">"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
