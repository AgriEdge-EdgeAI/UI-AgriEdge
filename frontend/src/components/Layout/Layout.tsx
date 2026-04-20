import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 3, mb: 3, flex: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, textAlign: 'center', bgcolor: '#1a5e2a', color: 'white' }}>
        <Typography variant="body2">
          © 2026 AgriEdge - Edge AI Automatic Irrigation System
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
