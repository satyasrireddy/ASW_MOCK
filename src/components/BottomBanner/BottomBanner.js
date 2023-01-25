import React from 'react'
import { Container, Grid } from '@mui/material'
import {Card} from '@mui/material'
import {CardMedia, CardActions, CardContent, Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { borderColor } from '@mui/system';


const BottomBanner = () => {
  const navigate = useNavigate();
  
  return (
    
    <Container bgcolor='black'> 
     <Grid container className='resGrid'>
     <Grid item xs={12}  >
     <Card >
     <CardMedia 
     component='img'
      image={require("../../assets/banner-prebuilt.jpeg")} 
      onClick={()=> navigate("pre_builts")} alt="image1"  
      
      />
   </Card>
   </Grid>
   </Grid>
   

 
 
  <Grid container spacing={2} marginTop={2}>
  <Grid item xs={12} md={6} sm={6} >
  <Card sx={{ maxWidth: 500, height: 550, bgcolor:"black", border:10, borderColor:'gray'}}>
      <CardMedia
        sx={{ height: 400,}}
        image={require("../../assets/intel_block.jpeg")}
        title="Intel Pcs"
      />
      <CardContent>
        <Typography variant="h2" color="white" align='center'>
         INTEL PCS
        </Typography>
      </CardContent>
      
      <CardActions variant="contained" color="error">
        <Button onClick={()=> navigate("intel_custom_pc")} variant="contained" color="error" size="medium" fullWidth="true" >CONFIGURE AN INTEL SYSTEM</Button>
        
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={6} sm={6} >
    <Card sx={{ maxWidth: 500, height: 550, bgcolor:"black" , border:10, borderColor:'gray'}}>
      <CardMedia
        sx={{ height: 400,}}
        image={require("../../assets/amd_block.jpeg")}
        title="AMd Pcs"
      />
      <CardContent>
        <Typography  color="white" variant="h2" align="center">
         AMD PCS
        </Typography>
      </CardContent>
      
      <CardActions>

        <Button onClick={()=> navigate("amd_custom_pc")} variant="contained" color="error"  size="medium" fullWidth="true">CONFIGURE AN AMD SYSTEM</Button>
        
      </CardActions>
    </Card>
     </Grid>
</Grid>
</Container>
    
  )
}

export default BottomBanner