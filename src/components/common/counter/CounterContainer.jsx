import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock }) => {
  //   console.log("el Coounter se actualizó");
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("aguanta, no tengo");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return <Counter contador={contador} sumar={sumar} restar={restar} />;
};

export default CounterContainer;
