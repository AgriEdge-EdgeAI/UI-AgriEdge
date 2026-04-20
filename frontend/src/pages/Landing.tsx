import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <Box>
      {/* Hero Section with Gradient */}
      <motion.div initial="hidden" animate="visible" variants={stagger}>
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
            color: 'white',
            borderRadius: '32px',
            p: { xs: 4, md: 8 },
            mb: 6,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated background circles */}
          <Box
            sx={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              animation: 'pulse 3s ease-in-out infinite',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -80,
              left: -80,
              width: 250,
              height: 250,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />

          <motion.div variants={fadeUp}>
            <WaterDropIcon sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.2))' }} />
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <Typography variant="h1" gutterBottom fontWeight="800" sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
              AgriEdge
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <Typography variant="h5" gutterBottom sx={{ opacity: 0.95 }}>
              Smart Irrigation System Powered by Edge AI
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
              Real-time soil monitoring with machine learning • Save up to 50% water with intelligent automation
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/login')}
                sx={{
                  bgcolor: 'white',
                  color: theme.palette.primary.main,
                  '&:hover': { bgcolor: '#f5f5f5', transform: 'scale(1.05)' },
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
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.05)' },
                  transition: 'transform 0.2s ease',
                }}
              >
                Create Account
              </Button>
            </Box>
          </motion.div>
        </Box>
      </motion.div>

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { value: '50%', label: 'Water Savings', icon: <WaterDropIcon />, color: '#2ecc71' },
          { value: '94%', label: 'ML Accuracy', icon: <TrendingUpIcon />, color: '#3498db' },
          { value: '24/7', label: 'Real-time Monitoring', icon: <SpeedIcon />, color: '#e74c3c' },
        ].map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  bgcolor: 'white',
                  borderRadius: 4,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <Box sx={{ fontSize: 48, color: stat.color, mb: 1 }}>{stat.icon}</Box>
                <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Features Grid */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        <Typography variant="h3" textAlign="center" gutterBottom sx={{ mb: 4 }}>
          <span className="gradient-text">Smart Features</span>
        </Typography>
        <Grid container spacing={4}>
          {[
            { icon: <AgricultureIcon />, title: 'Smart Irrigation', desc: 'AI-powered watering decisions based on real-time soil conditions and weather forecasts' },
            { icon: <SpeedIcon />, title: 'Edge AI Processing', desc: 'Local inference on ESP32 for ultra-low latency decisions without cloud dependency' },
            { icon: <CloudUploadIcon />, title: 'Cloud Analytics', desc: 'Historical data tracking, predictive insights, and comprehensive reporting' },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div variants={fadeUp}>
                <Box
                  className="hover-lift"
                  sx={{
                    p: 4,
                    bgcolor: 'white',
                    borderRadius: 4,
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <Box sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" gutterBottom fontWeight="600">{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Landing;
