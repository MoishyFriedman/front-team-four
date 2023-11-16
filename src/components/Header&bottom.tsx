import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Outlet, useNavigate } from "react-router-dom";

export default function Header() {
  const email = localStorage.getItem("email") || "email@gmail.com";
  const [count, setCount] = useState(null);
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
        setCount(response.data);
        setName(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => {
                navigate("/");
              }}
              aria-label="home"
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate("/cart");
              }}
              aria-label="cart"
            >
              <StyledBadge badgeContent={count} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <Box sx={{ width: "20px" }}></Box>
            <Typography>{JSON.parse(email)}</Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/signIn");
              }}
            >
              Sign In
            </Button>
            <Box sx={{ width: "20px" }}></Box>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/signUp");
              }}
            >
              Sign Up
            </Button>
            <Box sx={{ width: "20px" }}></Box>
            <Avatar></Avatar>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
