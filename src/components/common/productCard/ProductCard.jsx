import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento, isInItemList = true }) => {
  return (
    <Card sx={{ width: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {elemento.title}
        </Typography>
      </CardContent>
      <CardMedia component="img" alt="green iguana" height="180" image={elemento.img} />
      <CardContent>
        <Typography variant="body1">{elemento.description}</Typography>
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
