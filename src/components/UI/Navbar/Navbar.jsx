import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { iconComponents, MOVIE_LISTS, TOP_LISTS } from '../../../../constants';

const Icon = ({ iconName }) => {
  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const trigger = useScrollTrigger();

  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <Slide in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <List>
                  {TOP_LISTS.map(item => (
                    <Link key={item.title} component={RouterLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Divider />
                <List>
                  {MOVIE_LISTS.map(item => (
                    <Link key={item.title} component={RouterLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Typography
              sx={{ color: 'white', textDecoration: 'none' }}
              component={RouterLink}
              to="/"
              variant="h4"
            >
              Betflix
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
