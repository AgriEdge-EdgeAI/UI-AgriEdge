import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section - Perfectly Centered */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
          borderRadius: '32px',
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 10 },
          mb: 6,
          textAlign: 'center',
        }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <WaterDropIcon sx={{ fontSize: 72, color: 'white', mb: 2, opacity: 0.9 }} />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              color: 'white',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            AgriEdge
          </Typography>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              opacity: 0.95,
              mb: 2,
              fontWeight: 500,
            }}
          >
            Smart Irrigation System Powered by Edge AI
          </Typography>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              opacity: 0.85,
              maxWidth: 600,
              mx: 'auto',
              mb: 4,
            }}
          >
            Real-time soil monitoring with machine learning • Save up to 50% water with intelligent automation
          </Typography>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/login')}
              sx={{
                bgcolor: 'white',
                color: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  transform: 'translateY(-2px)',
                },
                transition: 'transform 0.2s ease',
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/register')}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'transform 0.2s ease',
              }}
            >
              Create Account
            </Button>
          </Box>
        </motion.div>
      </Box>

      {/* Stats Section - Perfect Grid Alignment */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 700, color: theme.palette.success.main, mb: 1 }}>
              50%
            </Typography>
            <Typography variant="body1" fontWeight={500} gutterBottom>
              Water Savings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Average reduction in water usage
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 700, color: theme.palette.info.main, mb: 1 }}>
              94%
            </Typography>
            <Typography variant="body1" fontWeight={500} gutterBottom>
              ML Accuracy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Edge AI prediction precision
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 700, color: theme.palette.warning.main, mb: 1 }}>
              24/7
            </Typography>
            <Typography variant="body1" fontWeight={500} gutterBottom>
              Real-time Monitoring
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Continuous soil and weather tracking
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Features Section - Perfect 3-Column Grid */}
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 5,
          fontSize: { xs: '1.75rem', md: '2.25rem' },
          fontWeight: 700,
        }}
      >
        <span className="gradient-text">Smart Features</span>
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              height: '100%',
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <AgricultureIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
            </Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Smart Irrigation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              AI-powered watering decisions based on real-time soil conditions and weather forecasts
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              height: '100%',
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <SpeedIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
            </Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Edge AI Processing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Local inference on ESP32 for ultra-low latency decisions without cloud dependency
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              height: '100%',
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <CloudUploadIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
            </Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Cloud Analytics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Historical data tracking, predictive insights, and comprehensive reporting
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
