import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { Badge } from "@mui/material";

/**
 *
 */
const paginas = ["Comprar", "Promociones", "Lo Nuevo", "Moto Outlet"];
const settings = ["Perfil", "Mi Cuenta", "Mis compras", "Salir"];

const NavBar = () => {
  const [linksNav, setLinksNav] = useState(null);
  const [linkUsuario, setLinkUsuario] = useState(null);

  const handleOpenNavMenu = (event) => {
    setLinksNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setLinkUsuario(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setLinksNav(null);
  };

  const handleCloseUserMenu = () => {
    setLinkUsuario(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#333652", color: "#FAD02C" }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          {/* ICONO*/}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          {/* TITULO*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Super Cuauh Merch
          </Typography>

          {/* LISTA DE CATEGORÍAS CLICKEABLES EN MOBILE ONLY */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Cuenta del usuario"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={linksNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(linksNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* MOSTRAR LISTA DE LINKS EN FORMA DE MENUITEM */}
              {paginas.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ICONO TABLE */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* TITULO TABLET*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 900,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Super Cuauh Merch
          </Typography>

          {/* LINKS CLICKEABLES MEDIUM+ */}
          <Box
            sx={{
              flexGrow: 5,
              display: { xs: "none", md: "flex" },
            }}
          >
            {paginas.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 1, color: "#E9EAEC", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <IconButton size="large">
            <Badge size="large" badgeContent={9} color="primary" style={{ color: "#FAD02C" }} sx={{ mx: 2 }}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* LOGO DE USUARIO */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My Configuración">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Cuauhtemoc Medina"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={linkUsuario}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(linkUsuario)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;