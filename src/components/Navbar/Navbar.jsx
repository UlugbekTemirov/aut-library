import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { useLocation, useNavigate } from "react-router-dom";

// globals
import { APPBARLGLIGHT, pages, LOGINLGLIGHT, userPages } from "../../global";

// react router dom
import { Link } from "react-router-dom";

// cookies
import Cookies from "universal-cookie";

const Navbar = () => {
  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const [currentPage, setCurrentPage] = useState("");
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const location = useLocation();
  const indSlash = location.pathname.indexOf("/");
  const a = location.pathname.slice(indSlash + 1, location.pathname.length);

  useEffect(() => {
    setCurrentPage("home");
    if (!a) setCurrentPage("home");
    else setCurrentPage(a);
  }, [a]);

  const navigate = useNavigate();

  const LogoutHandler = () => {
    cookie.remove("jwt", { path: "/" });
    navigate("/home");
  };

  return (
    <AppBar
      sx={{
        background: APPBARLGLIGHT,
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AUT Library
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Boolean(jwt) &&
                pages.map((page) => (
                  <Link
                    onClick={() => setCurrentPage(page.toLowerCase())}
                    key={page}
                    to={page.toLowerCase()}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        display: "block",
                        color: "black",
                        width: "100%",
                        padding: "10px",
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              {!Boolean(jwt) &&
                userPages.map((page) => (
                  <Link
                    className="text-black"
                    onClick={() => setCurrentPage(page.toLowerCase())}
                    key={page}
                    to={page.toLowerCase()}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        display: "block",
                        color: "black",
                        width: "100%",
                        padding: "10px",
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Boolean(jwt) &&
              pages.map((page) => (
                <Link
                  onClick={() => setCurrentPage(page.toLowerCase())}
                  key={page}
                  to={page.toLowerCase()}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 0.5,
                      display: "block",
                      backgroundColor: `${
                        currentPage === page.toLowerCase() && "lightgray"
                      }`,
                      color: `${
                        currentPage === page.toLowerCase() ? "black" : "white"
                      }`,
                      "&:hover": {
                        backgroundColor: "silver",
                        color: "black",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            {!Boolean(jwt) &&
              userPages.map((page) => (
                <Link
                  onClick={() => setCurrentPage(page.toLowerCase())}
                  key={page}
                  to={page.toLowerCase()}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 0.5,
                      display: "block",
                      backgroundColor: `${
                        currentPage === page.toLowerCase() && "lightgray"
                      }`,
                      color: `${
                        currentPage === page.toLowerCase() ? "black" : "white"
                      }`,
                      "&:hover": {
                        backgroundColor: "silver",
                        color: "black",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
          </Box>

          {!Boolean(jwt) ? (
            <Box sx={{ flexGrow: 0 }}>
              <Link to="login">
                <Button
                  sx={{
                    background: LOGINLGLIGHT,
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#000",
                    },
                  }}
                  variant="contained"
                >
                  Login
                </Button>
              </Link>
            </Box>
          ) : (
            <Button
              onClick={LogoutHandler}
              sx={{
                background: LOGINLGLIGHT,
                "&:hover": {
                  backgroundColor: "silver",
                  color: "#000",
                },
              }}
              variant="contained"
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
