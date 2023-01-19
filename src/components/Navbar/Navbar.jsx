import React, { useState, useEffect } from "react";

// mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// logo
import libraryLogo from "../../images/aut-library-new.png";

// icons
import loginIcon from "../../images/login.svg";
import wishlistic from "../../images/star.png";

// globals
import { APPBARLGLIGHT, pages, LOGINLGLIGHT, userPages } from "../../global";

// react router dom
import { useLocation, useNavigate, Link } from "react-router-dom";

// cookies
import Cookies from "universal-cookie";
import Wishlist from "../Wishlist/Wishlist";
import Backdrop from "../Backdrop/Backdrop";

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
  const nextIndSlash = location.pathname.lastIndexOf("/");
  const a = location.pathname.slice(
    indSlash + 1,
    indSlash !== nextIndSlash ? nextIndSlash : location.pathname.length
  );

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

  const [open, setOpen] = useState(false);
  const handlerClose = () => setOpen(false);
  const wishlistHandler = () => {
    setOpen(true);
  };

  return (
    <AppBar
      sx={{
        background: APPBARLGLIGHT,
      }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link className="md:flex hidden mr-5" to="/home">
            <img className="w-36" src={libraryLogo} alt="logo" />
          </Link>

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
          <Link className="md:hidden flex w-full justify-center" to="/home">
            <img className="w-36 mb-1" src={libraryLogo} alt="logo" />
          </Link>
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
                    color: "#8458B3",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#8458B3",
                    },
                  }}
                  variant="contained"
                >
                  <img src={loginIcon} alt="login" />
                </Button>
              </Link>
            </Box>
          ) : (
            <div className="flex items-center">
              {!Boolean(jwt) && (
                <div className="relative">
                  <img
                    onClick={wishlistHandler}
                    className="w-9 mr-2 bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-md p-1"
                    src={wishlistic}
                    alt="wishlist"
                  />
                  {open ? <Wishlist /> : null}
                </div>
              )}

              <Button
                onClick={LogoutHandler}
                sx={{
                  background: LOGINLGLIGHT,
                  color: "#8B0000",
                  "&:hover": {
                    backgroundColor: "lightgray",
                  },
                }}
                variant="contained"
              >
                Logout
              </Button>
            </div>
          )}
        </Toolbar>
      </Container>
      {open ? <Backdrop onClick={handlerClose} /> : null}
    </AppBar>
  );
};
export default Navbar;
