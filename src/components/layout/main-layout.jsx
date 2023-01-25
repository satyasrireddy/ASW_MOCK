import React from 'react'
import Box from '@mui/material/Box'
import Header from '../Header'
import Footer from '../Footer/Footer'
import TopBanner from '../TopBanner/TopBanner'

const MainLayout = ({ children }) => {
  return (
    <Box component="main">
      <TopBanner />
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
