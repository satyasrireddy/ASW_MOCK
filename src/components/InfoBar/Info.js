import React from 'react'
import bootstrap from 'react-bootstrap'
import './info.css'


const Info = () => {
  return(
    /* <Alert sx={{ width: '100%', height: '90px', margin: 'auto', padding: '20px', backgroundColor: '#a11a1e', color:'#f7f2f2', fontSize:'20px', textAlign:'centre'
     }}Variant = "filled" severity="error">
    <strong> ALL COMPONENTS ON OUR CONFIGURATORS ARE IN STOCK AND AVAILABLE FOR YOUR CUSTOM BUILD</strong>
    </Alert> */
      
      <div class="alert alert-danger" role="alert">
       <h5> ALL COMPONENTS ON OUR CONFIGURATORS ARE IN STOCK AND AVAILABLE FOR YOUR CUSTOM BUILD </h5>
      </div>
  )
  
}

export default Info
