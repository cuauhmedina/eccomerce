import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <>
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
    </>
  );
};

export default CartWidget;
