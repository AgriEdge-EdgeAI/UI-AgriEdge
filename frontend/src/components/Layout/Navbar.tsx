import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
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
        <Toolbar disableGutters sx={{ gap: 2, minHeight: { xs: 60, md: 68 } }}>
          {/* Logo with hover effect */}
          <Box 
            display="flex" 
            alignItems="center" 
            gap={1} 
            sx={{ 
              cursor: 'pointer', 
              mr: 4,
              transition: 'transform 0.2s ease',
              '&:hover': { transform: 'scale(1.02)' }
            }} 
            onClick={() => navigate('/')}
          >
            <Box sx={{ 
              width: 34, height: 34, borderRadius: '10px', 
              background: 'linear-gradient(135deg, #1b8c2e, #2eae40)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
              '&:hover': { boxShadow: '0 4px 12px rgba(27,140,46,0.3)' }
            }}>
              <AgricultureIcon sx={{ fontSize: 18, color: '#fff' }} />
            </Box>
            <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#111111' }}>
              AgriEdge
            </Typography>
          </Box>

          {/* Nav Links with hover effects */}
          {isLoggedIn && (
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 0.5 }}>
              <Button 
                onClick={() => navigate('/dashboard')} 
                startIcon={<DashboardIcon />} 
                sx={{ 
                  color: isActive('/dashboard') ? '#1b8c2e' : '#444444', 
                  background: isActive('/dashboard') ? 'rgba(27,140,46,0.08)' : 'transparent', 
                  borderRadius: '10px', 
                  px: 2, py: 0.8,
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: '#1b8c2e', 
                    background: 'rgba(27,140,46,0.06)',
                    transform: 'translateY(-2px)'
                  } 
                }}
              >
                Dashboard
              </Button>
              <Button 
                onClick={() => navigate('/live-feed')} 
                startIcon={<SensorsIcon />} 
                sx={{ 
                  color: isActive('/live-feed') ? '#1b8c2e' : '#444444', 
                  background: isActive('/live-feed') ? 'rgba(27,140,46,0.08)' : 'transparent', 
                  borderRadius: '10px', 
                  px: 2, py: 0.8,
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: '#1b8c2e', 
                    background: 'rgba(27,140,46,0.06)',
                    transform: 'translateY(-2px)'
                  } 
                }}
              >
                Live Feed
              </Button>
              <Button 
                onClick={() => navigate('/history')} 
                startIcon={<HistoryIcon />} 
                sx={{ 
                  color: isActive('/history') ? '#1b8c2e' : '#444444', 
                  background: isActive('/history') ? 'rgba(27,140,46,0.08)' : 'transparent', 
                  borderRadius: '10px', 
                  px: 2, py: 0.8,
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: '#1b8c2e', 
                    background: 'rgba(27,140,46,0.06)',
                    transform: 'translateY(-2px)'
                  } 
                }}
              >
                History
              </Button>
            </Box>
          )}

          {/* Auth Area */}
          <Box sx={{ ml: 'auto' }}>
            {isLoggedIn ? (
              <>
                <Box 
                  display="flex" 
                  alignItems="center" 
                  gap={1.5} 
                  sx={{ 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': { transform: 'translateY(-2px)' }
                  }} 
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  <Box display="flex" alignItems="center" gap={0.8}>
                    <span className="pulse-dot" style={{ width: 6, height: 6 }} />
                    <Typography variant="caption" sx={{ color: '#1b8c2e', fontWeight: 600, fontSize: '0.72rem' }}>LIVE</Typography>
                  </Box>
                  <Avatar sx={{ 
                    width: 32, height: 32, 
                    bgcolor: '#1b8c2e', 
                    color: '#fff',
                    transition: 'all 0.2s ease',
                    '&:hover': { transform: 'scale(1.05)' }
                  }}>
                    {userName.charAt(0).toUpperCase()}
                  </Avatar>
                </Box>
                <Menu 
                  anchorEl={anchorEl} 
                  open={Boolean(anchorEl)} 
                  onClose={() => setAnchorEl(null)} 
                  PaperProps={{ 
                    sx: { 
                      mt: 1.5, minWidth: 180, borderRadius: '14px',
                      '& .MuiMenuItem-root': {
                        transition: 'all 0.2s ease',
                        '&:hover': { background: 'rgba(27,140,46,0.08)', transform: 'translateX(4px)' }
                      }
                    } 
                  }}
                >
                  <MenuItem onClick={() => { navigate('/dashboard'); setAnchorEl(null); }}>Dashboard</MenuItem>
                  <MenuItem onClick={() => { localStorage.clear(); navigate('/login'); }} sx={{ color: '#e53935' }}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Box display="flex" gap={1.5}>
                <Button 
                  onClick={() => navigate('/login')} 
                  sx={{ 
                    color: '#444444',
                    transition: 'all 0.2s ease',
                    '&:hover': { color: '#1b8c2e', transform: 'translateY(-2px)' }
                  }}
                >
                  Login
                </Button>
                <Button 
                  variant="contained" 
                  onClick={() => navigate('/register')}
                  className="btn-shine"
                >
                  Get Started
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
