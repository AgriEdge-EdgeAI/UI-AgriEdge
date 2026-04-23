import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 3, mb: 3, flex: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, textAlign: 'center', borderTop: '1px solid rgba(22,194,101,0.08)', background: 'rgba(10,15,13,0.8)' }}>
        <Typography variant="caption" sx={{ color: '#3d4f44' }}>© 2026 AgriEdge · Edge AI Automatic Irrigation System</Typography>
      </Box>
    </Box>
  );
};

export default Layout;
