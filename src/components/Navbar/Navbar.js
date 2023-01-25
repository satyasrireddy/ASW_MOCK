import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";
import { useNavigate } from 'react-router-dom';

import arrow from "../../assets/img/chevron-down.svg";

//IMPORTING SVG'S
const pages = [
  { title: "PreBuilts", href: "/pre_builts", arrow:false },
  { title: "Intel Custom PCs", href: "/intel_custom_pc", arrow:false },
  { title: "AMD Custom PCs", href: "/amd_custom_pc", arrow:false },
  { title: "Support", href: " ", arrow:true },
  { title: 'View Cart', href: "/shopping_cart", arrow:false }
];

const styles = {
  btnLink: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "22px",
    textTransform: "capitalize",
    color: {xs: '#000000', lg: '#fff'},
    marginRight: "44px",
    paddingX: 0,
    display: "flex",
  },
};

const Navbar = () => {
  const navigate = useNavigate();
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{ flexGrow: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}
    >
      {pages.map((page, index) => (
        <Box>
{page.arrow ? (
  <Box>
<MuiButton key={index} sx={styles.btnLink} onClick={handleClick}>
              {page.title} {anchorEl ? <ExpandLess /> : <ExpandMore />}
            </MuiButton>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Contact Us</MenuItem>
            <MenuItem onClick={handleClose}>FAQs </MenuItem>
            <MenuItem onClick={handleClose}>About AS</MenuItem>
            <MenuItem onClick={handleClose}>Finance</MenuItem>
            <MenuItem onClick={handleClose}>Delivery Information</MenuItem>
            <MenuItem onClick={handleClose}>Warranty Information</MenuItem>
          </Menu>
  </Box>
            
          ) : (
            <MuiButton key={index} sx={styles.btnLink} onClick={()=> navigate(`${page.href}`)} >
              {page.title}{" "}
              {page.arrow && (
                <img src={arrow} style={{ marginLeft: "5px" }} alt="arrow" />
              )}
            </MuiButton>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
