import {LinearProgress, Container, Stack } from "@mui/material";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <h1>
          Bienvenido <i>{greeting}</i>
        </h1>
        <p>
          Este es un mensaje de bienvenida personalizado con{" "}
          <b>
            <i>props</i>
          </b>
          , el nombre se pasó desde el <b>App.jsx</b> al componente{" "}
          <b>ItemListContainer.jsx</b>
        </p>
        <p>
          Los estilos que se ven en este componente están en un .css integrado
          solo al componente{" "}
        </p>
        <p>
          La página sigue en construcción, asi que disfruta de mientras de esta
          barra de carga infinita
        </p>
        <Stack sx={{ width: "90%", color: "grey.500", my:5 }}>
          <LinearProgress />
        </Stack>
      </Container>
    </>
  );
};

export default ItemListContainer;
