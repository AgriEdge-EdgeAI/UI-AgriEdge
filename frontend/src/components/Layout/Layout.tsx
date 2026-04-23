import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f7f0' }}>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 3, mb: 3, flex: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, textAlign: 'center', borderTop: '1px solid rgba(46,125,50,0.08)', bgcolor: '#ffffff' }}>
        <Typography variant="caption" sx={{ color: '#9eae9e' }}>© 2026 AgriEdge · Edge AI Automatic Irrigation System</Typography>
      </Box>
    </Box>
  );
};

export default Layout;
