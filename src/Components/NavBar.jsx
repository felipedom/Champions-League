import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [{ page: 'Home', url: "/" }, { page: 'Clubes', url: "/clubes" }];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (

    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img width="50%" src="https://img.uefa.com/imgml/uefacom/ucl/2021/logos/logo_dark.svg"
          style={{ filter: "invert(152%) sepia(23%) saturate(50%) hue-rotate(89deg) brightness(58%) contrast(50%)" }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.page} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link component={RouterLink} fontSize={18} to={item.url} p={3} style={{ textDecoration: "none" }} color="primary">
                <ListItemText color='primary' primary={item.page} />
              </Link>

            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>

  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex', position: "display" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box p={1} ml={3}>
            <img width={"20%"} src="https://img.uefa.com/imgml/uefacom/ucl/2021/logos/logo_dark.svg" />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link component={RouterLink} fontSize={18} to={item.url} p={3} style={{ textDecoration: "none" }} color="#fff">
                {item.page}
              </Link>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>

  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;