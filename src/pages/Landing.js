import Box from '@mui/material/Box'
import OurProducts from '../components/OurProduct/OurProducts'
import BottomBanner from '../components/BottomBanner/BottomBanner'
import Slides from '../components/Slides/Slides'
import InfoBar from '../components/InfoBar/Info'
import Sales from '../components/Sales/Sales'

function Landing() {
  return (
    <Box bgcolor={'black'}>
      <InfoBar />
      <Slides />
      
      <BottomBanner />
      <OurProducts />
     
    </Box>
  )
}

export default Landing;
