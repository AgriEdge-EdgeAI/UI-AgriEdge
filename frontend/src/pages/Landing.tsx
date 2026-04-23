import React from 'react';
import { Box, Typography, Button, Grid, Paper, Container, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const STATS = [
  { value: '50%', label: 'Water Savings', sub: 'Average reduction vs manual irrigation', icon: <WaterDropIcon sx={{ fontSize: 32 }} />, color: '#16c265' },
  { value: '94%', label: 'ML Accuracy', sub: 'Edge AI prediction precision', icon: <TrendingUpIcon sx={{ fontSize: 32 }} />, color: '#38bdf8' },
  { value: '24/7', label: 'Monitoring', sub: 'Continuous sensor data collection', icon: <ScheduleIcon sx={{ fontSize: 32 }} />, color: '#d4a373' },
  { value: '<2s', label: 'Response Time', sub: 'From detection to pump activation', icon: <FlashOnIcon sx={{ fontSize: 32 }} />, color: '#a78bfa' },
];

const FEATURES = [
  { icon: <AgricultureIcon sx={{ fontSize: 32 }} />, title: 'Smart Irrigation', desc: 'AI-powered watering decisions based on real-time soil conditions and weather forecasts.' },
  { icon: <SpeedIcon sx={{ fontSize: 32 }} />, title: 'Edge AI Processing', desc: 'On-device inference on ESP32. No cloud dependency for critical pump control decisions.' },
  { icon: <CloudUploadIcon sx={{ fontSize: 32 }} />, title: 'Cloud Analytics', desc: 'Historical data tracking, predictive insights, and comprehensive reporting from any device.' },
  { icon: <WaterDropIcon sx={{ fontSize: 32 }} />, title: 'Water Conservation', desc: 'Save up to 50% water through intelligent scheduling and real-time soil analysis.' },
];

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 3, px: 2.5, py: 1, borderRadius: '99px', border: '1px solid rgba(22,194,101,0.25)', bgcolor: 'rgba(22,194,101,0.06)' }}>
          <span className="pulse-dot" style={{ width: 8, height: 8 }} />
          <Typography variant="caption" sx={{ color: '#16c265', fontWeight: 600, letterSpacing: '0.08em' }}>EDGE AI IRRIGATION SYSTEM</Typography>
        </Box>

        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4.5rem' }, lineHeight: 1.2, mb: 3, letterSpacing: '-0.03em', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: '#f0fdf4' }}>
          Grow Smarter,<br />
          <Box component="span" className="gradient-text">Waste Nothing</Box>
        </Typography>

        <Typography variant="body1" sx={{ color: '#6b7f74', maxWidth: 600, mx: 'auto', mb: 5, fontSize: '1.1rem' }}>
          Real-time soil monitoring with machine learning. AgriEdge automates irrigation decisions at the edge — saving water, time, and crops.
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="contained" size="large" onClick={() => navigate('/register')} endIcon={<ArrowForwardIcon />} sx={{ px: 5, py: 1.5, borderRadius: 40 }}>
            Start for Free
          </Button>
          <Button variant="outlined" size="large" onClick={() => navigate('/login')} sx={{ px: 5, py: 1.5, borderRadius: 40 }}>
            Sign In
          </Button>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {STATS.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper sx={{ p: 3, textAlign: 'center', height: '100%', minHeight: 180 }}>
              <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: `${stat.color}20`, width: 56, height: 56 }}>
                {stat.icon}
              </Avatar>
              <Typography variant="h3" sx={{ fontWeight: 800, color: stat.color, mb: 1 }}>
                {stat.value}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: '#f0fdf4', mb: 0.5 }}>
                {stat.label}
              </Typography>
              <Typography variant="caption" sx={{ color: '#6b7f74' }}>
                {stat.sub}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Features Section */}
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 5, fontWeight: 700, color: '#f0fdf4' }}>
        Smart Features
      </Typography>
      
      <Grid container spacing={3}>
        {FEATURES.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper sx={{ p: 3, textAlign: 'center', height: '100%', minHeight: 260 }}>
              <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'rgba(22,194,101,0.1)', width: 64, height: 64 }}>
                {feature.icon}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0fdf4', mb: 1.5 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7f74', lineHeight: 1.6 }}>
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Landing;
