import { ShoppingBasket } from '@mui/icons-material';
import { Button, Paper, Rating } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalCartContext } from '../../context/CartContext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

const ProductDetail = ({ id, title, desc, price, cover, rating, ratingCount }) => {
  const {addItemTocart}= useContext(GlobalCartContext);
  const navigate = useNavigate();

  const handleToCart= () => {
    const newCartItem = {
      id: id,
        cover: cover,
        title: title,
        price: price,
        desc: desc,
        quantity:1
    };
    addItemTocart(newCartItem);
    navigate('/shopping_cart');
  };

  return (
    <Grid container spacing={2} padding={4}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              p: 2,
              backgroundColor: "gray",
              borderRadius: 2,
              transition: (theme) => theme.transitions.create(["box-shadow"]),
              "&:hover": {
                boxShadow: 2,
              },
            }}
          >
                <img
                src={require("../../assets/img/Prebuild/" + cover)}
                width={300}
                height={400}
                alt={"Products " + id}
              />
          
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ mb: 2 }}>
          <Typography component="h3" variant="h2">
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="rating-course" value={rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly />
            <Typography component="span" variant="h6">
              ({ratingCount})
            </Typography>
          </Box>
        </Box>

          {desc.map((value) => (
              <li style={{fontSize: '20px', marginBottom: 8}}>{value}</li>
            ))}
          <Box
              sx={{
                display: "flex",
                marginTop: 2
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h2" color="primary.main">
                  {"£" + price}
                </Typography>
              </Box>
              <Button sx={{marginLeft: 10}} variant="contained" color='error'onClick={handleToCart} size="large" startIcon={<ShoppingBasket fontSize='Large' />}>
              Add to Basket
              </Button>
            </Box>
        </Grid>
      </Grid>
  );
};

export default ProductDetail;
