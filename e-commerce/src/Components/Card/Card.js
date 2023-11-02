import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const Cards = (props) => {
  const { imageUrl, title, description, price, rating } = props;
  return (
    <div className="card">
      <div className="favorite-icon1">
        <FavoriteBorderIcon />
      </div>
      <img src={imageUrl} alt="card" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <h2>{`$${price}`}</h2>
      </div>
      <Stack spacing={1}>
        <Rating
          className="rating"
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </Stack>
    </div>
  );
};

export default Cards;
