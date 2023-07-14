import React, { useState } from "react";
import Container from "@mui/material/Container";

const CheckoutContainer = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento);

    // LAS VALIDACIONES

    // AXIOS.POST(URL, DATOS)
    console.log(data);
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return (
    <Container maxWidth="md">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type for name" name="name" onChange={handleChange} />
        <input
          type="text"
          placeholder="Type for lastname"
          name="lastName"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default CheckoutContainer;
