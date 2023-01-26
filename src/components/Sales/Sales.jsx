import React from 'react'
import { Card, CardMedia,CardContent, Grid, Typography } from '@mui/material'

const Sales = () => {
  return (
    <Grid container spacing={2}>
      <Grid item as={12} sm={6}>
        <Card>
          <CardMedia>
          component='img'
          height='450'
          image={require("../../assets/banner_sales.png")}
          </CardMedia>
        </Card>
      </Grid> 



     <Grid item as={12} sm={4}>
      <Card>
      <Card sx={{ maxWidth: 500, height: 100, bgcolor:"black", border:10, borderColor:'gray'}}>
      <CardContent>
        <Typography variant="h2" color="white" align='center'>
         £150 OFF
        </Typography>
        <Typography variant="h4" color="white" align='center'>
          when you spend over £3000
        </Typography>
      </CardContent>
      
      
    </Card>

      </Card>

      <Card>

      </Card>
      <Card>

      </Card>
      <Card>

      </Card>

     </Grid>
    </Grid>
 
   
  )
}

export default Sales