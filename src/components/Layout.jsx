import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './UI/Navbar'
import Footer from './UI/Footer'

const Layout = () => {
  return (
    <Container fixed>
      <Navbar/>
      <Outlet />
      <Footer/>
    </Container>
  )
}

export default Layout
