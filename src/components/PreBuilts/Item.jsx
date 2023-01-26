import { useNavigate } from 'react-router-dom';

import { Button, CardActionArea, CardActions, Box, Badge } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

const PreBuiltItem = ({ id, title, price, cover, desc, discount }) => {
  const navigate = useNavigate();
  const getDiscountPrice = () => {
    return (price - (price * discount / 100));

  };

  const discountPrice = getDiscountPrice();
  const handleNavigation = () => navigate(`/item/${id}`);

  return (
    
    <Card className='animate__animated animate__fadeIn' raised>
      <CardActionArea>
      <Stack >
      
      <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56}}>Sale</Avatar>
      
    </Stack>
        <CardMedia
          component='img'
          height='450'
          image={require("../../assets/img/Prebuild/" + cover)}
          alt={id}
          onClick={handleNavigation}
        />
        <CardContent>
          <Typography variant='h3' type="heading" color='black' align='center' Wrap padding={2}>
            {title}
          </Typography>
          {desc.map((value) => (
              <li style={{fontSize: '14px', padding: 4}}>
                {value}
              </li>
            ))}
<<<<<<< HEAD
      </CardContent>
=======
        </CardContent>
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
      </CardActionArea>
      <CardContent sx={{ display: 'flex',padding:'5', bgcolor:'text.primary', width:'70'}}> 
      <Button sx={{bgcolor:'#fc3903', color:'white'}}> 25% off </Button>
      <Typography variant="h6" sx={{ color:'white', margin:'5'}}> Deal  </Typography>
      
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around', bgcolor:'text.primary' }}>
      <Typography variant="h6" sx={{ color:'white', textDecoration: 'line-through', ml: 0, paddingTop:'4px', paddingLeft:'0' }}> was { "£" +price} </Typography>
        
       <Typography variant="h3"  marginLeft='2' paddingLeft='3'color='white'> Now {"£ " + discountPrice}</Typography>
            
         
        <Button size='small' variant="contained" color='error' onClick={handleNavigation}>
          More Info
        </Button>
      </CardActions>
    </Card>
    
   
  );
};


export default PreBuiltItem;
