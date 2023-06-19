const ItemList = ({ cambiarSaludo }) => {
  return (
    <>
      <hr />

      <button
        onClick={() => {
          cambiarSaludo("Nuevo Saludo");
        }}
      >
        Cambiar Saludo
      </button>
    </>
  );
};

export default ItemList;
