import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from './UI/Footer';
import Navbar from './UI/Navbar';

const Layout = () => {
  return (
    <Container fixed>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
