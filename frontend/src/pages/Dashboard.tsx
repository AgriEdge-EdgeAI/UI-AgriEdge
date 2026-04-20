import React from 'react';
import { Grid, Paper, Typography, Box, Button, LinearProgress, Avatar, Divider, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SavingsIcon from '@mui/icons-material/Savings';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import HistoryIcon from '@mui/icons-material/History';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const userName = localStorage.getItem('userName') || 'Farmer';
  const farmName = localStorage.getItem('farmName') || 'THEMIYA';
  const location = localStorage.getItem('location') || 'Baththaramulla';

  const stats = {
    soilMoisture: 58,
    waterSavedPercent: 32,
    waterSavedLiters: 1240,
    temperature: 32,
    humidity: 68,
    pumpStatus: false,
  };

  const recentEvents = [
    { time: '10:30 AM', event: 'Irrigation completed', details: '12L used', type: 'success' },
    { time: '08:15 AM', event: 'Soil moisture dropped', details: '45% - Need water', type: 'warning' },
    { time: '06:00 AM', event: 'System online', details: 'All sensors OK', type: 'info' },
  ];

  const getMoistureColor = (value: number) => {
    if (value < 30) return theme.palette.error.main;
    if (value < 50) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* Welcome Section */}
      <Paper
        sx={{
          p: 3,
          mb: 3,
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="600" gutterBottom>
          Welcome back, {userName}! 🌿
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.85 }}>
          {farmName} • {location}
        </Typography>
      </Paper>

      {/* Stats Grid - 3 columns */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Soil Moisture Card */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar sx={{ bgcolor: theme.palette.primary.light + '20', color: theme.palette.primary.main }}>
                  <WaterDropIcon />
                </Avatar>
                <Typography variant="subtitle2" color="text.secondary">Soil Moisture</Typography>
              </Box>
            </Box>
            <Typography variant="h2" fontWeight="700" sx={{ fontSize: '2.75rem', mb: 1 }}>
              {stats.soilMoisture}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={stats.soilMoisture}
              sx={{
                height: 6,
                borderRadius: 3,
                mb: 1.5,
                bgcolor: theme.palette.grey[200],
                '& .MuiLinearProgress-bar': { bgcolor: getMoistureColor(stats.soilMoisture), borderRadius: 3 },
              }}
            />
            <Typography variant="caption" sx={{ color: getMoistureColor(stats.soilMoisture), fontWeight: 500 }}>
              ✓ Good - Optimal Range
            </Typography>
          </Paper>
        </Grid>

        {/* Water Savings Card */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Avatar sx={{ bgcolor: theme.palette.success.light + '20', color: theme.palette.success.main }}>
                <SavingsIcon />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">Water Savings</Typography>
            </Box>
            <Typography variant="h2" fontWeight="700" sx={{ fontSize: '2.75rem', mb: 0.5 }}>
              +{stats.waterSavedPercent}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stats.waterSavedLiters.toLocaleString()}L saved this month
            </Typography>
          </Paper>
        </Grid>

        {/* Current Status Card */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Avatar sx={{ bgcolor: theme.palette.info.light + '20', color: theme.palette.info.main }}>
                <DeviceThermostatIcon />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">Current Status</Typography>
            </Box>
            <Typography variant="h2" fontWeight="700" sx={{ fontSize: '2.75rem', mb: 0.5 }}>
              {stats.temperature}°C
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Humidity: {stats.humidity}%
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: stats.pumpStatus ? theme.palette.success.main : theme.palette.grey[400] }} />
              <Typography variant="caption" color="text.secondary">
                Pump: {stats.pumpStatus ? 'RUNNING' : 'OFF'}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom Section - 2 columns */}
      <Grid container spacing={3}>
        {/* Recent Events */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="600" gutterBottom>
              Recent Events
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {recentEvents.map((event, index) => (
              <Box key={index}>
                <Box display="flex" alignItems="flex-start" justifyContent="space-between" py={2}>
                  <Box display="flex" gap={2} alignItems="flex-start">
                    {event.type === 'success' && <CheckCircleIcon sx={{ color: theme.palette.success.main, fontSize: 20 }} />}
                    {event.type === 'warning' && <WarningIcon sx={{ color: theme.palette.warning.main, fontSize: 20 }} />}
                    {event.type === 'info' && <DeviceThermostatIcon sx={{ color: theme.palette.info.main, fontSize: 20 }} />}
                    <Box>
                      <Typography variant="body2" fontWeight="500">{event.event}</Typography>
                      <Typography variant="caption" color="text.secondary">{event.details}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="caption" color="text.secondary">{event.time}</Typography>
                </Box>
                {index < recentEvents.length - 1 && <Divider />}
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="600" gutterBottom>
              Quick Actions
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box display="flex" flexDirection="column" gap={2}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<AgricultureIcon />}
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/live-feed')}
                sx={{
                  py: 1.5,
                  justifyContent: 'space-between',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                }}
              >
                Manual Irrigate
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<HistoryIcon />}
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/history')}
                sx={{ py: 1.5, justifyContent: 'space-between' }}
              >
                View Full History
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
