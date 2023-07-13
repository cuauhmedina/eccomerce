import { useParams } from "react-router-dom";
import ProductCard from "../../common/productCard/ProductCard";
import { Typography } from "@mui/material";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ItemList = ({ items }) => {
  const { categoryName } = useParams();

  return (
    <div>
      {/* <h1>List of {categoryName}</h1> */}
      <Typography component="h1" variant="h2" sx={{ textAlign: "center" }}>
        {categoryName == "all" || categoryName === undefined
          ? "Products"
          : capitalize(categoryName)}
      </Typography>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
