import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from './UI/Footer';
import Navbar from './UI/Navbar';

const Layout = () => {
  return (
    <Container
      fixed
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Box sx={{ p: 4 }} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
