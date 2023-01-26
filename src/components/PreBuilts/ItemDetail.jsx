<<<<<<< HEAD
import { ShoppingBasket } from '@mui/icons-material';
import { Button, Paper, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from "@mui/material/styles";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalCartContext } from '../../context/CartContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemDetail = (item) => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))
  const { id, title, desc, price, cover, discount } = item;
  const getDiscountPrice = () => {
    return (price - (price * discount / 100));

  };
  const navigate = useNavigate();
  const [discountPrice, setDiscountPrice] = useState(getDiscountPrice());
  const {addItemTocart}= useContext(GlobalCartContext)

  const handleToCart= () => {
    const newCartItem = {
      id: id,
        cover: cover,
        title: title,
        price: discountPrice?discountPrice:price,
        desc: desc,
        quantity:1
    };
    addItemTocart(newCartItem);
    navigate('/shopping_cart');
  };

  return (
    <Grid container spacing={2} padding={4}>   
      <Grid item xs={12} sm={7} lg={7}>
        <Box
          sx={{
            p: 2,
            backgroundColor: "background.paper",
            borderRadius: 4,
            transition: (theme) => theme.transitions.create(["box-shadow"]),
            "&:hover": {
              boxShadow: 2,
            },
          }}
        >
          <Item
            padding={2}
            sx={{
              lineHeight: 0,
              overflow: "hidden",
              borderRadius: 3,
              m: 4,
            }}
          >
            <img
              src={require("../../assets/img/Prebuild/" + cover)}
              width={matchMobileView?280:400}
              height={matchMobileView?300:400}
              alt={"Products " + id}
            />
          </Item>
        </Box>
      </Grid>
        <Grid item xs={12} sm={5} lg={5}>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h2">
            {title}
          </Typography>
        </Box>

        {desc.map((value) => (
          <li style={{ fontSize: '24px', marginBottom: 8 }}>{value}</li>
        ))}
        <Box
          sx={{
            display: "flex",
            marginTop: 2
          }}
        >
          <Box sx={{ display: "flex"}}>
            <Typography variant="h3" color='text.secondary'> {"£" + discountPrice}</Typography>
            <Typography variant="h4" sx={{ textDecoration: 'line-through', ml: 2, paddingTop:'4px' }}>{"£" +price}
            </Typography>
          </Box>
          <Button sx={{ marginLeft: 10 }} variant="contained" color='error' size="large" startIcon={<ShoppingBasket fontSize='Large' />} onClick={handleToCart}>
            Add to Basket
          </Button>
        </Box>
      </Grid>
    </Grid>
=======
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const ItemDetail = ({ id, title, desc, price, cover }) => {
  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/item/${id}`);
  return (
    <>
      <Grid container mt={5} className='animate__animated animate__fadeIn' spacing={3}>
        <Grid item sm={6} md={4} className='animate__animated animate__fadeInLeft' >
          <Card raised>
            <CardMedia component='img' image={require("../../assets/img/Prebuild/" + cover)} alt={id} />
          </Card>
          <Box
            display='flex'
            justifyContent='space-between'
            mt={1}
            alignContent='center'
          >
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Typography component='h2' variant='h2' textAlign='center' gutterBottom>
            {title}
          </Typography>

          {desc.map((value) => (
              <li style={{fontSize: '24px', marginBottom: 8}}>{value}</li>
            ))}
          <br></br>
          <tr>
            <td>
              <Typography component='h3' variant='h3' textAlign='left'>
                {`£ ${price}`}
              </Typography>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>
              <Button size='Large' color='error' onClick={handleNavigation}>
                Add to Basket
              </Button>
            </td>
          </tr>
        </Grid>
      </Grid>
    </>
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
  );
};

export default ItemDetail;
