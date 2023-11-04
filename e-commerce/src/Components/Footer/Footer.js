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
    <div className="footer-text">
      <div>
        <h3>Company Info</h3>
        <p>About</p>
        <p>Social responsibility</p>
        <p>Affiliate</p>
        <p>Fashion Blogger</p>
      </div>
      <div>
        <h3>Company Info</h3>
        <p>About</p>
        <p>Social responsibility</p>
        <p>Affiliate</p>
        <p>Fashion Blogger</p>
      </div>
      <div>
        <h3>Company Info</h3>
        <p>About</p>
        <p>Social responsibility</p>
        <p>Affiliate</p>
        <p>Fashion Blogger</p>
      </div>
      <div>
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
    </div>
  );
};

export default Footer;
