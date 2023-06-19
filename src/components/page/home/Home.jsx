import { useState } from "react";

const Home = ({ x, y }) => {
  const [contador, setContador] = useState(0);

  const Sumar = (num) => {
    setContador(contador + num);
  };

  console.log(x);
  console.log(y);

  return (
    <>
      <hr />
      <div>Home </div>
      <h3>El contador está en {contador}</h3>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar contador
      </button>
      <button onClick={() => Sumar(2)}>Sumar 2</button>
    </>
  );
};

export default Home;
