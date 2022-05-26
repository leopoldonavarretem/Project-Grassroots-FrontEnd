//Import React and Routes
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

//IMPORT CSS
import "./Navbar.css";

//Import Material Design Components
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

function Navbar(props) {
  const [image, setImage] = React.useState(
    ""
  );

  useEffect(()=>{
    if(!props.user){
      setImage("")
    }else{
      setImage(props.user.profilePic)
    }
  },[props])

  // if(props.user.profilePic){
  //   setImage(props.user.profilePic)
  // }
  //React UseState
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //Handle Events
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Link to={PATHS.HOMEPAGE} className="authLink">
            <Typography
              variant="h6"
              noWrap
              component="a"
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
              GrassRoots
            </Typography>
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
              <Link to={PATHS.LEARN} className="authLink">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Learn</Typography>
                </MenuItem>
              </Link>

              <Link to={PATHS.ISSUES} className="authLink">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Issues</Typography>
                </MenuItem>
              </Link>

              <Link to={PATHS.EVENTS} className="authLink">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Events</Typography>
                </MenuItem>
              </Link>

              <Link to={PATHS.GROUPS} className="authLink">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Groups</Typography>
                </MenuItem>
              </Link>
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
            GrassRoots
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={PATHS.LEARN} className="authLink">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 4, color: "white", display: "block" }}
              >
                Learn
              </Button>
            </Link>

            <Link to={PATHS.ISSUES} className="authLink">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Issues
              </Button>
            </Link>

            <Link to={PATHS.EVENTS} className="authLink">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Events
              </Button>
            </Link>

            <Link to={PATHS.GROUPS} className="authLink">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Groups
              </Button>
            </Link>
          </Box>

          {props.user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar alt="Remy Sharp" src={image} />
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
                <Link to={PATHS.USER} className="authLink">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">My Profile</Typography>
                  </MenuItem>
                </Link>

                <Link to={PATHS.EVENTSCREATE} className="authLink">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Create Event</Typography>
                  </MenuItem>
                </Link>

                <Link to={PATHS.GROUPSCREATE} className="authLink">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Create Group</Typography>
                  </MenuItem>
                </Link>

                <MenuItem onClick={props.handleLogout} className="authLink">
                  <Typography textAlign="center">Log Out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}

          {!props.user && (
            <Box>
              <Link to={PATHS.LOGINPAGE}>
                <Button variant="contained">Log In</Button>
              </Link>
              <Link to={PATHS.SIGNUPPAGE}>
                <Button variant="contained">Create Account</Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// {
//   /* <button className="nav-logoutbtn" onClick={props.handleLogout}>
//           Logout
//         </button> */
// }

//  {props.user ? (
//           <>
//             <LinkMenu/>
//           </>
//         ) : (
//           <>
//             <Link to={PATHS.SIGNUPPAGE} className="authLink">
//               Signup
//             </Link>
//             <Link to={PATHS.LOGINPAGE} className="authLink">
//               Log In
//             </Link>
//           </>
//         )}

export default Navbar;
