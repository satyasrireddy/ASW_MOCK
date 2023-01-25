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
  );
};

export default ItemDetail;
