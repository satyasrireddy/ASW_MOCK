import PreBuiltItem from './Item'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ItemList = ({ items }) => (
  <>
    <container> 
    <Typography variant='h6' type="heading" color='text.secondary' align='center' Wrap padding={2}>
     Pay in 3 interest-free payments on purchases from £30-£2,000. Learn more
   </Typography>
    <Typography variant='h2' type="heading" color='black' Wrap padding={2} paddingTop={5} align='center'>
      AlphaSync Prebuilt Gaming PCs
          </Typography>

          <Typography variant='h3' type="heading" color='black' Wrap padding={2} paddingTop={5} align='center'>
          The brand new range of AlphaSync prebuilt PCs is now available; Packed with power, these seriously high-performance computers are custom built by a dedicated team for gamers or power users who want a superfast prebuilt gaming PC.
          </Typography>



    <Grid container spacing={4} p={3}>
      {items?.map((item) => (
        <Grid item xs={12} sm={7} lg={4} key={item.id}>
          <PreBuiltItem {...item} />
        </Grid>
      ))}
    </Grid>
      
    </container>
   
  </>
);

export default ItemList;
