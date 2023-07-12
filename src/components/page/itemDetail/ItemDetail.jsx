import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let selected = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res) => {
      res(selected);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
  };

  return (
    <div>
      <h2>{producto.title}</h2>
      <h4>{producto.price}</h4>

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
