import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SensorsIcon from '@mui/icons-material/Sensors';
import HistoryIcon from '@mui/icons-material/History';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    navigate('/login');
    handleClose();
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#1a5e2a' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AgricultureIcon sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 4, fontWeight: 700, color: 'white', textDecoration: 'none', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            AgriEdge
          </Typography>

          {isLoggedIn && (
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
              <Button color="inherit" onClick={() => navigate('/dashboard')} startIcon={<DashboardIcon />}>
                Dashboard
              </Button>
              <Button color="inherit" onClick={() => navigate('/live-feed')} startIcon={<SensorsIcon />}>
                Live Feed
              </Button>
              <Button color="inherit" onClick={() => navigate('/history')} startIcon={<HistoryIcon />}>
                History
              </Button>
            </Box>
          )}

          <Box sx={{ flexGrow: 0, ml: 'auto' }}>
            {isLoggedIn ? (
              <div>
                <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: '#ff9800' }}>
                    {localStorage.getItem('userName')?.charAt(0) || 'U'}
                  </Avatar>
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                  <MenuItem onClick={() => { navigate('/dashboard'); handleClose(); }}>Dashboard</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                <Button variant="contained" color="secondary" onClick={() => navigate('/register')}>
                  Register
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
