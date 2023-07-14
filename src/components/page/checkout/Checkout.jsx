import { TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Checkout = ({ sendForm }) => {
  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: "center" }}>This is the check out</h1>
      {/* <Box
        component="form"
        sx={{
          m: 1,
          "& .MuiTextField-root": { m: 1, width: "250px" },
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <TextField id="name" size="" label="Name" variant="outlined" />
        <TextField id="lastname" label="Last Name" variant="outlined" />
        
      </Box> */}
      <form onSubmit={sendForm}>
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="lastname" name="lastname" />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default Checkout;
