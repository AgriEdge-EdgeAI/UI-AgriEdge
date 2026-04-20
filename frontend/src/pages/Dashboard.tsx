import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Button, Card, CardContent, LinearProgress, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SavingsIcon from '@mui/icons-material/Savings';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const userName = localStorage.getItem('userName') || 'Farmer';
  const farmName = localStorage.getItem('farmName') || 'Green Valley Estate';
  const location = localStorage.getItem('location') || 'Negombo, Sri Lanka';

  const stats = { soilMoisture: 58, waterSaved: 1240, waterSavedPercent: 32, temperature: 32, humidity: 68, pumpStatus: false };
  const recentEvents = [
    { time: '10:30 AM', event: 'Irrigation completed', details: '12L used' },
    { time: '08:15 AM', event: 'Soil moisture dropped', details: '45% - Need water' },
    { time: '06:00 AM', event: 'System online', details: 'All sensors OK' },
  ];

  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Paper sx={{ p: 3, mb: 3, borderRadius: 3, background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`, color: 'white' }}>
          <Typography variant="h5" gutterBottom fontWeight="600">Welcome back, {userName}! 🌱</Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>{farmName} • {location}</Typography>
        </Paper>
      </motion.div>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { title: 'Soil Moisture', value: `${stats.soilMoisture}%`, icon: <WaterDropIcon />, color: '#2ecc71', progress: stats.soilMoisture, status: 'Good - Optimal Range' },
          { title: 'Water Savings', value: `+${stats.waterSavedPercent}%`, sub: `${stats.waterSaved.toLocaleString()}L saved`, icon: <SavingsIcon />, color: '#f39c12' },
          { title: 'Current Status', value: `${stats.temperature}°C`, sub: `Humidity: ${stats.humidity}%`, icon: <ThermostatIcon />, color: '#3498db', pump: stats.pumpStatus },
        ].map((item, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <Box sx={{ color: item.color }}>{item.icon}</Box>
                    <Typography variant="h6">{item.title}</Typography>
                  </Box>
                  <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>{item.value}</Typography>
                  {item.sub && <Typography color="text.secondary">{item.sub}</Typography>}
                  {item.progress && <LinearProgress variant="determinate" value={item.progress} sx={{ my: 1, height: 8, borderRadius: 4, bgcolor: '#e0e0e0' }} />}
                  {item.status && <Typography variant="caption" color="success.main">{item.status}</Typography>}
                  {item.pump !== undefined && <Typography variant="body2">Pump: <strong style={{ color: item.pump ? '#2ecc71' : '#e74c3c' }}>{item.pump ? 'RUNNING' : 'OFF'}</strong></Typography>}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight="600">Recent Events</Typography>
            {recentEvents.map((event, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: index < recentEvents.length - 1 ? `1px solid ${theme.palette.divider}` : 'none' }}>
                <Typography variant="body2" color="text.secondary">{event.time}</Typography>
                <Typography variant="body2" fontWeight="500">{event.event}</Typography>
                <Typography variant="body2" color="text.secondary">{event.details}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight="600">Quick Actions</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}><Button fullWidth variant="contained" startIcon={<AgricultureIcon />} onClick={() => navigate('/live-feed')} sx={{ py: 1.5, borderRadius: 2, background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})` }}>Manual Irrigate</Button></Grid>
              <Grid item xs={12}><Button fullWidth variant="outlined" startIcon={<PictureAsPdfIcon />} onClick={() => navigate('/history')} sx={{ py: 1.5, borderRadius: 2 }}>View Report</Button></Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
