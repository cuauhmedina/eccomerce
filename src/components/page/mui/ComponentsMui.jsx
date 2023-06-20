import {
  Badge,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';

const ComponentsMui = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        color="primary"
        startIcon={<DeleteIcon />}
      >
        Borrar
      </Button>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff color="primary" />
                ) : (
                  <Visibility color="secondary" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>
    </>
  );
};

export default ComponentsMui;
