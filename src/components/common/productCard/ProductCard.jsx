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
        <Typography variant="body1">{elemento.description}</Typography>
        <p>Price {elemento.price}</p>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button size="medium">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
