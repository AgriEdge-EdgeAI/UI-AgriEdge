import React from 'react';
import { Grid, Paper, Typography, Box, Button, LinearProgress, Avatar, Divider, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SavingsIcon from '@mui/icons-material/Savings';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import HistoryIcon from '@mui/icons-material/History';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'Farmer';
  const farmName = localStorage.getItem('farmName') || 'Green Valley Estate';
  const location = localStorage.getItem('location') || 'Negombo, Sri Lanka';
  
  const stats = { 
    soilMoisture: 58, 
    waterSavedPercent: 32, 
    waterSavedLiters: 1240, 
    temperature: 32, 
    humidity: 68, 
    pumpStatus: false 
  };
  
  const recentEvents = [
    { time: '10:30 AM', event: 'Irrigation completed', details: '12 L used', type: 'success' },
    { time: '08:15 AM', event: 'Low moisture alert', details: 'Soil at 45%', type: 'warning' },
    { time: '06:00 AM', event: 'System check', details: 'All sensors OK', type: 'info' },
  ];

  const systemHealth = [
    { label: 'ESP32 Edge Device', status: 'online', metric: '98%' },
    { label: 'Soil Moisture Sensor', status: 'online', metric: 'Active' },
    { label: 'Temperature Sensor', status: 'online', metric: 'Active' },
    { label: 'Water Pump', status: 'idle', metric: 'Standby' },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Welcome Banner */}
      <Paper sx={{ 
        p: 4, 
        mb: 4, 
        background: 'linear-gradient(135deg, rgba(13,122,64,0.3) 0%, rgba(22,194,101,0.1) 100%)', 
        border: '1px solid rgba(22,194,101,0.2)',
        borderRadius: 3 
      }}>
        <Typography variant="h4" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: '#f0fdf4', mb: 1 }}>
          Good morning, {userName} 🌿
        </Typography>
        <Typography variant="body1" sx={{ color: '#6b7f74' }}>
          {farmName} · {location}
        </Typography>
      </Paper>

      {/* Stats Cards - 3 equal cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%', minHeight: 180 }}>
            <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'rgba(22,194,101,0.15)', width: 56, height: 56 }}>
              <WaterDropIcon sx={{ color: '#16c265', fontSize: 32 }} />
            </Avatar>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#16c265', mb: 1 }}>
              {stats.soilMoisture}%
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: '#f0fdf4', mb: 1 }}>
              Soil Moisture
            </Typography>
            <LinearProgress variant="determinate" value={stats.soilMoisture} sx={{ height: 6, borderRadius: 3, mb: 1 }} />
            <Typography variant="caption" sx={{ color: '#16c265' }}>✓ Optimal range</Typography>
          </Paper>
        </Grid>
        
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%', minHeight: 180 }}>
            <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'rgba(22,194,101,0.15)', width: 56, height: 56 }}>
              <SavingsIcon sx={{ color: '#16c265', fontSize: 32 }} />
            </Avatar>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#16c265', mb: 1 }}>
              +{stats.waterSavedPercent}%
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: '#f0fdf4', mb: 0.5 }}>
              Water Savings
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7f74' }}>
              {stats.waterSavedLiters.toLocaleString()} L saved this month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%', minHeight: 180 }}>
            <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'rgba(56,189,248,0.15)', width: 56, height: 56 }}>
              <DeviceThermostatIcon sx={{ color: '#38bdf8', fontSize: 32 }} />
            </Avatar>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#38bdf8', mb: 1 }}>
              {stats.temperature}°C
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: '#f0fdf4', mb: 0.5 }}>
              Field Conditions
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7f74' }}>
              Humidity: {stats.humidity}% · Pump: {stats.pumpStatus ? 'RUNNING' : 'IDLE'}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom Section - Recent Events and Quick Actions */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0fdf4', mb: 2 }}>
              Recent Events
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {recentEvents.map((event, i) => (
              <Box key={i}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {event.type === 'success' && <CheckCircleIcon sx={{ color: '#16c265' }} />}
                    {event.type === 'warning' && <WarningAmberIcon sx={{ color: '#f59e0b' }} />}
                    {event.type === 'info' && <InfoOutlinedIcon sx={{ color: '#38bdf8' }} />}
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#f0fdf4' }}>{event.event}</Typography>
                      <Typography variant="caption" sx={{ color: '#6b7f74' }}>{event.details}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="caption" sx={{ color: '#6b7f74' }}>{event.time}</Typography>
                </Box>
                {i < recentEvents.length - 1 && <Divider />}
              </Box>
            ))}
          </Paper>
        </Grid>
        
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0fdf4', mb: 2 }}>
              Quick Actions
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button 
                fullWidth 
                variant="contained" 
                startIcon={<AgricultureIcon />} 
                endIcon={<ArrowForwardIcon />} 
                onClick={() => navigate('/live-feed')} 
                sx={{ py: 1.5, justifyContent: 'space-between', borderRadius: 2 }}
              >
                Manual Irrigate
              </Button>
              <Button 
                fullWidth 
                variant="outlined" 
                startIcon={<HistoryIcon />} 
                endIcon={<ArrowForwardIcon />} 
                onClick={() => navigate('/history')} 
                sx={{ py: 1.5, justifyContent: 'space-between', borderRadius: 2 }}
              >
                View Full History
              </Button>
            </Box>
            
            {/* System Health Mini Section */}
            <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(22,194,101,0.1)' }}>
              <Typography variant="subtitle2" sx={{ color: '#6b7f74', mb: 2, fontWeight: 600 }}>
                System Health
              </Typography>
              {systemHealth.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="body2" sx={{ color: '#6b7f74' }}>{item.label}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="caption" sx={{ color: item.status === 'online' ? '#16c265' : '#6b7f74', fontWeight: 500 }}>
                      {item.metric}
                    </Typography>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: item.status === 'online' ? '#16c265' : '#3d4f44' }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
