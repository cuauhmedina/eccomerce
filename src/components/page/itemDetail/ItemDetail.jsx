import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = () => {
  return (
    <div>
      <h3>Nombre del producot</h3>
      <h4>imagen del producto</h4>

      <CounterContainer stock={5} />
    </div>
  );
};

export default ItemDetail;
