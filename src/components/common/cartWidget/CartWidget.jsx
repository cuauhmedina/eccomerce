import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <IconButton size="large">
          <Badge
            size="large"
            badgeContent="9"
            color="primary"
            style={{ color: "#FAD02C" }}
            sx={{ mx: 2 }}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
};

export default CartWidget;
