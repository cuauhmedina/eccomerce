import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";

import { Alert, Button, Container, InputLabel, MenuItem, Rating, Typography } from "@mui/material";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    let selected = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res) => {
      res(selected);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const handleChangeQty = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Alert severity="success" sx={{ fontWeight: "bold", my: "1em" }}>
        Your product is available. Get it before is sold out!
      </Alert>
      <Grid container spacing={1}>
        <Grid xs={7}>
          <Paper elevation={5} sx={{ padding: "1em", textAlign: "center", minHeight: "400px" }}>
            <img src={producto.img} alt="algo" style={{ width: "75%" }} />
          </Paper>
        </Grid>
        <Grid xs={5}>
          <Paper elevation={6} sx={{ padding: "1em", minHeight: "400px" }}>
            <Typography variant="h3">{producto.title}</Typography>
            <Rating name="half-rating-read" precision={0.5} value={producto.rank ?? 0} readOnly />
            <Typography variant="h4">$ {producto.price}</Typography>
            <Typography variant="body1" sx={{ fontWeight: "600" }}>
              {producto.description}
            </Typography>
            <InputLabel id="demo-simple-select-label" sx={{ fontWeight: "bold" }}>
              Quantity
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={quantity}
              label="Age"
              onChange={handleChangeQty}
            >
              <MenuItem selected value={1}>
                1
              </MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
            <Button variant="contained" size="medium" sx={{ mx: "1em" }}>
              Add
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemDetail;
