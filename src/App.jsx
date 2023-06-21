import ItemListContainer from "./components/page/itemListContainer/ItemListContainer";
import NavBar from "./components/page/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Cuauhtemoc Medina"} />
    </>
  );
}

export default App;
