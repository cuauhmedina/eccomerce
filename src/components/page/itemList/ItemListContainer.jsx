<<<<<<< HEAD
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return <ItemList />;
=======
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();
  useEffect(() => {
    let filtered = products.filter((elemento) => elemento.category === categoryName);
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined || categoryName == "all" ? products : filtered);
      //   reject({message: "No autorizado", status: 401})
    });

    tarea.then((respuesta) => setItems(respuesta)).catch((error) => setError(error));
  }, [categoryName]);

  return <ItemList items={items} />;
>>>>>>> PreEntrega2_Cuauhtemoc_Medina
};

export default ItemListContainer;
