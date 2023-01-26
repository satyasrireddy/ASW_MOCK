import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './slide.css';


const Slides = () => {
  const navigate = useNavigate();
  return (
    <container>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    
    <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
        <h2>HOORAY! WINTER SUPER SALE IS BACK</h2>
        <h4>FLAT 25% DISCOUNT ON ALL OUR PREBUILD PCs"</h4>
        <br></br>
        <Button onClick={()=> navigate("pre_builts")}>SHOP NOW</Button>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1603481546238-487240415921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2>GEFORCE RTX 40 SERIES</h2>
        <h4>"Ahead of its time, ahead of the game."</h4>
        <br></br>
        <Button onClick={()=> navigate("pre_builts")}>SHOP NOW</Button>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://t4.ftcdn.net/jpg/03/13/04/05/360_F_313040520_7HWUhSrLv2EaHI1zeCHJd5w3IFJ3MYJJ.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
        <h2>CUSTOMISE YOUR ALPHASYNC PC</h2>
        <h4>Stunning lighting and powerful macros..</h4> 
        <Button onClick={()=> navigate("pre_builts")}>SHOP NOW</Button>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>NEED HELP? </h2>
        <Button onClick={()=> navigate("Contact_Form")}>CONTACT US HERE</Button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </container>
    
  )
}

export default Slides