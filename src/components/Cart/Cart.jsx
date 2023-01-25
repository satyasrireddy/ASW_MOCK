import { Fragment, useContext } from 'react';
import { GlobalCartContext } from '../../context/CartContext';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';


const Cart = () => {
  const { myShoppingCart, removeItemFromCart, totalCartPrice} =
    useContext(GlobalCartContext);

  return (
    <>
      {myShoppingCart.length > 0 ? (
        <>
          <Container>
            {myShoppingCart.map((item) => (
              <Fragment key={item.id}>
                <CartItem {...item} removeItemFromCart={removeItemFromCart} />
                <Divider variant='middle' sx={{ my: 3 }} />
              </Fragment>
            ))}
          </Container>
          <Typography
            variant='h4'
            align='right'
            mr={4}
          >
            Total: {'£' + totalCartPrice().toFixed(2)}
          </Typography>
          <Box display='flex' gap justifyContent={'center'} my>
            <Button
              variant='contained'
              color='error'
              startIcon={<PointOfSaleIcon />}
            >
              Proceed to Pay
            </Button>
          </Box>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
