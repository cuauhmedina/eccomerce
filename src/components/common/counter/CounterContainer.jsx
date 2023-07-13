import { useState } from "react";
import Counter from "./Counter";

<<<<<<< HEAD
const CounterContainer = ({ stock }) => {
  //   console.log("el Coounter se actualizó");
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("aguanta, no tengo");
=======
const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("cantidad maxima");
>>>>>>> PreEntrega2_Cuauhtemoc_Medina
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

<<<<<<< HEAD
  return <Counter contador={contador} sumar={sumar} restar={restar} />;
=======
  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
>>>>>>> PreEntrega2_Cuauhtemoc_Medina
};

export default CounterContainer;
