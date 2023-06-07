import Navbar from "./NavBar";
import Footer from "./Footer";

function App() {
  const functionSaludar = () => {
    console.log("Hola ");
  };

  return (
    <div>
      <>
        <Navbar />
        <h1>hola</h1>
        <button onClick={functionSaludar}>Saludar</button>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
