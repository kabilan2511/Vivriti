import { useState } from "react";
import Moboom from "../../Helpers/moboom/Moboom.js";
import ProductList from "../ProductList/ProductList";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Footer from "../Footer/Footer.js";

const Header = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleSearchWord = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <>
      <div className="header">
        <Moboom />
        <input
          className="search-bar"
          type="search"
          placeholder="Search.."
          name="search"
          onChange={handleSearchWord}
        ></input>
        <button className="header-buttons">Store</button>
        <button className="header-buttons">Account</button>
        <button className="header-buttons">Wish List</button>
        <button className="header-buttons">
          Basket <ShoppingBasketIcon />
        </button>
      </div>
      <div className="opening-card">
        <h3>Loreum Ipsum</h3>
        <p>
          Slash Sales bgin in November. Get upto 80% Discount on all products.
        </p>
      </div>
      <ProductList searchWord={searchWord} />
      <Footer />
    </>
  );
};

export default Header;
