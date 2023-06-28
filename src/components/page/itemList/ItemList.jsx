import CounterContainer from "../../common/counter/CounterContainer";

const ItemList = ({ edad }) => {
  return (
    <>
      <div>
        <h1>Aca van los productos</h1>
        <button onClick={() => setItems([...items, {}])}>
          Traer productos
        </button>
        <h3>Edad es {edad}</h3>
        <CounterContainer stock={7} />
      </div>
    </>
  );
};

export default ItemList;
