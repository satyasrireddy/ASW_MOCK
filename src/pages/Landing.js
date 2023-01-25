import Box from '@mui/material/Box'
import OurProducts from '../components/OurProduct/OurProducts'
import BottomBanner from '../components/BottomBanner/BottomBanner'
import Slider from '../components/Slider/Slider'
import InfoBar from '../components/InfoBar/Info'
import Sales from '../components/Sales/Sales'

function Landing() {
  return (
    <Box bgcolor={'black'}>
      <InfoBar />
      <Slider />
      
      <BottomBanner />
      <OurProducts />
     
    </Box>
  )
}

export default Landing;
