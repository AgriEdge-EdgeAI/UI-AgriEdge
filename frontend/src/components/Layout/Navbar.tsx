import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Avatar, Menu, MenuItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SensorsIcon from '@mui/icons-material/Sensors';
import HistoryIcon from '@mui/icons-material/History';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName = localStorage.getItem('userName') || 'U';

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            <Box sx={{ width: 34, height: 34, borderRadius: '10px', background: 'linear-gradient(135deg, #16c265 0%, #0d7a40 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AgricultureIcon sx={{ fontSize: 18, color: '#fff' }} />
            </Box>
            <Typography variant="h6" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, background: 'linear-gradient(135deg, #f0fdf4, #16c265)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AgriEdge</Typography>
          </Box>

          {isLoggedIn && (
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 0.5 }}>
              <Button onClick={() => navigate('/dashboard')} startIcon={<DashboardIcon />} sx={{ color: isActive('/dashboard') ? '#16c265' : '#6b7f74', background: isActive('/dashboard') ? 'rgba(22,194,101,0.08)' : 'transparent' }}>Dashboard</Button>
              <Button onClick={() => navigate('/live-feed')} startIcon={<SensorsIcon />} sx={{ color: isActive('/live-feed') ? '#16c265' : '#6b7f74', background: isActive('/live-feed') ? 'rgba(22,194,101,0.08)' : 'transparent' }}>Live Feed</Button>
              <Button onClick={() => navigate('/history')} startIcon={<HistoryIcon />} sx={{ color: isActive('/history') ? '#16c265' : '#6b7f74', background: isActive('/history') ? 'rgba(22,194,101,0.08)' : 'transparent' }}>History</Button>
            </Box>
          )}

          <Box sx={{ ml: 'auto' }}>
            {isLoggedIn ? (
              <>
                <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }} onClick={(e) => setAnchorEl(e.currentTarget)}>
                  <span className="pulse-dot" style={{ width: 6, height: 6 }} />
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'rgba(22,194,101,0.2)', color: '#16c265' }}>{userName.charAt(0).toUpperCase()}</Avatar>
                </Box>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                  <MenuItem onClick={() => navigate('/dashboard')}>Dashboard</MenuItem>
                  <MenuItem onClick={() => { localStorage.clear(); navigate('/login'); }} sx={{ color: '#ef4444' }}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Box display="flex" gap={1}>
                <Button onClick={() => navigate('/login')}>Login</Button>
                <Button variant="contained" onClick={() => navigate('/register')}>Get Started</Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
