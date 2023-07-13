import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento, isInItemList = true }) => {
  return (
    <Card sx={{ width: 380, padding: "10px" }}>
      <CardMedia component="img" alt="green iguana" height="180" image={elemento.img} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: "center" }}>
          {elemento.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          {elemento.description}
        </Typography>
        <p>
          Price <b>{elemento.price}</b>
        </p>
      </CardContent>
      <CardActions>
        <Link style={{ margin: "5px auto" }} to={`/itemDetail/${elemento.id}`}>
          <Button variant="contained" size="large">
            See more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
