const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h3>{contador}</h3>
      <button onClick={restar}>restar</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
