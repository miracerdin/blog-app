import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import cw from "../assets/cw.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logOut } from "../auth/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = React.useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 75, md: 75 },
              maxWidth: { xs: 75, md: 75 },
            }}
            alt="The house from the offer."
            src={cw}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Link to={"/"}>
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
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {"<Miraç/>"}
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Link to={"/"}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },

                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {"<Miraç/>"}
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://avatars.githubusercontent.com/u/99042499?v=4"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/profile")}
                    >
                      {currentUser.email}
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/newblog")}
                    >
                      New Post
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography onClick={() => logOut()}>Logout</Typography>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
