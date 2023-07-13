<<<<<<< HEAD
const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h3>{contador}</h3>
      <button onClick={restar}>restar</button>
      <button>Agregar al carrito</button>
=======
const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div style={{ border: "2px solid steelblue", padding: "40px" }}>
      <button onClick={sumar}>sumar</button>
      <h3>{contador}</h3>
      <button onClick={restar}>restar</button>

      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
>>>>>>> PreEntrega2_Cuauhtemoc_Medina
    </div>
  );
};

export default Counter;
