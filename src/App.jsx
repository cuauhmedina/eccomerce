import { useState } from "react";
import Home from "./components/page/home/home";
import ItemList from "./components/page/itemList/ItemList";

function App() {
  const [saludo, setSaludo] = useState("Saludo inicial");

  const cambiarSaludo = (newSaludo) => {
    setSaludo(newSaludo);
  };

  return (
    <>
      <p>
        El saludo es <b>{saludo}</b>
      </p>
      <Home x={"juancito"} y={true} />
      <ItemList saludo={saludo} cambiarSaludo={cambiarSaludo} />
    </>
  );
}

export default App;
