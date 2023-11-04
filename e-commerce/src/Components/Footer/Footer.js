import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div>
          <h3>Company Info</h3>
          <p>About</p>
          <p>Social responsibility</p>
          <p>Affiliate</p>
          <p>Fashion Blogger</p>
        </div>
        <div>
          <h3>Help & Support</h3>
          <p>Shopping Info</p>
          <p>Returns</p>
          <p>How to Order</p>
          <p>How to Track</p>
          <p>Size Chart</p>
        </div>
        <div>
          <h3>Customer Support</h3>
          <p>Contact Us</p>
          <p>Payment</p>
          <p>Bonus Point</p>
          <p>Notices</p>
        </div>
        <div>
          <div className="footer-icons-section">
            <div>
              <h3>Socials</h3>
              <span>
                <FacebookIcon />
              </span>
              <span>
                <TwitterIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
              <span>
                <LibraryMusicIcon />
              </span>
              <span>
                <AccountBoxIcon />
              </span>
            </div>
            <div>
              <h3>Platforms</h3>
              <span>
                <AndroidIcon />
              </span>
              <span>
                <AppleIcon />
              </span>
            </div>
          </div>
          <div className="footer-signUp">
            <h5>SignUp</h5>
            <div className="footer-signUp-subscribe">
              <input type="mail" placeholder="Your email"></input>
              <button>Subscribe</button>
            </div>
            <div>
              <span>
                By clicking the SUBSCRIBE button, you are agreeing to our{" "}
              </span>
              <a href="">Privacy & Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5>ⓒ2010-2022 All Rights Reserved</h5>
        <ul className="footer-documents">
          <li>Privacy Center</li>
          <li>Privacy & Cookie Policy</li>
          <li>Manage Cookies</li>
          <li>Terms & Conditions</li>
          <li>CopyWrite Notice</li>
          <li>Imprint</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
