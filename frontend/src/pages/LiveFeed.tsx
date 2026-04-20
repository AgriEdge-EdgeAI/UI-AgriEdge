import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box, Button, Card, CardContent, LinearProgress, Chip, Avatar, Divider, useTheme } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import ComputerIcon from '@mui/icons-material/Computer';
import MemoryIcon from '@mui/icons-material/Memory';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WifiIcon from '@mui/icons-material/Wifi';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const generateMockData = () => {
  const data = [];
  for (let i = 0; i <= 24; i += 4) {
    data.push({ time: `${i}:00`, moisture: 45 + Math.sin(i / 6) * 15 + Math.random() * 5, temp: 25 + Math.sin(i / 12) * 5 });
  }
  return data;
};

const LiveFeed: React.FC = () => {
  const theme = useTheme();
  const [moistureData] = useState(generateMockData());
  const [sensorReadings, setSensorReadings] = useState({ soilMoisture: 58, temperature: 32, humidity: 68, lastReading: '2 seconds ago' });
  const [pumpStatus, setPumpStatus] = useState(false);
  const [edgeStatus] = useState({ piOnline: true, cpu: 12, ram: 34, disk: 28, lastInference: '2s ago', model: 'KNN v1.2', arduinoConnected: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorReadings(prev => ({
        soilMoisture: Math.max(30, Math.min(80, prev.soilMoisture + (Math.random() - 0.5) * 3)),
        temperature: Math.max(25, Math.min(40, prev.temperature + (Math.random() - 0.5) * 0.5)),
        humidity: Math.max(50, Math.min(85, prev.humidity + (Math.random() - 0.5) * 2)),
        lastReading: 'just now',
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Typography variant="h5" fontWeight="600" gutterBottom>Real-Time Monitoring</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Live sensor data and edge device status</Typography>

      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="subtitle1" fontWeight="600" gutterBottom>Soil Moisture Trend (Last 24h)</Typography>
            <Box sx={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={moistureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                  <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                  <YAxis domain={[0, 100]} stroke={theme.palette.text.secondary} />
                  <Tooltip />
                  <Area type="monotone" dataKey="moisture" stroke={theme.palette.primary.main} fill={theme.palette.primary.light} fillOpacity={0.3} name="Soil Moisture (%)" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Sensor Readings */}
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="subtitle1" fontWeight="600" gutterBottom>Current Readings</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Box display="flex" alignItems="center" gap={1}><OpacityIcon sx={{ color: theme.palette.info.main }} /><Typography variant="body2">Soil Moisture</Typography></Box>
              <Box textAlign="right"><Typography variant="h6" fontWeight="700">{sensorReadings.soilMoisture}%</Typography><Chip label="Optimal" size="small" color="success" sx={{ height: 20, fontSize: '0.7rem' }} /></Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Box display="flex" alignItems="center" gap={1}><ThermostatIcon sx={{ color: theme.palette.error.main }} /><Typography variant="body2">Temperature</Typography></Box>
              <Typography variant="h6" fontWeight="700">{sensorReadings.temperature}°C</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Box display="flex" alignItems="center" gap={1}><OpacityIcon sx={{ color: theme.palette.info.main }} /><Typography variant="body2">Humidity</Typography></Box>
              <Typography variant="h6" fontWeight="700">{sensorReadings.humidity}%</Typography>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography variant="caption" color="text.secondary">Last Reading:</Typography>
              <Chip label={sensorReadings.lastReading} size="small" sx={{ bgcolor: theme.palette.success.light + '20', color: theme.palette.success.main }} />
            </Box>
          </Paper>
        </Grid>

        {/* Edge Device Status */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="subtitle1" fontWeight="600" gutterBottom>Edge Device Status</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Box display="flex" alignItems="center" gap={1}><ComputerIcon /><Typography variant="body2" fontWeight="500">Raspberry Pi 4</Typography></Box>
              <Chip icon={<CheckCircleIcon />} label="Online" size="small" color="success" />
            </Box>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={4}><Typography variant="caption" color="text.secondary">CPU: {edgeStatus.cpu}%</Typography><LinearProgress variant="determinate" value={edgeStatus.cpu} sx={{ height: 4, borderRadius: 2 }} /></Grid>
              <Grid item xs={4}><Typography variant="caption" color="text.secondary">RAM: {edgeStatus.ram}%</Typography><LinearProgress variant="determinate" value={edgeStatus.ram} sx={{ height: 4, borderRadius: 2 }} /></Grid>
              <Grid item xs={4}><Typography variant="caption" color="text.secondary">Disk: {edgeStatus.disk}%</Typography><LinearProgress variant="determinate" value={edgeStatus.disk} sx={{ height: 4, borderRadius: 2 }} /></Grid>
            </Grid>
            <Typography variant="caption" display="block" color="text.secondary">Last Inference: {edgeStatus.lastInference} • Model: {edgeStatus.model}</Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center" gap={1}><WifiIcon fontSize="small" /><Typography variant="body2">Arduino Node</Typography></Box>
              <Chip label="Connected" size="small" color="success" />
            </Box>
          </Paper>
        </Grid>

        {/* Pump Control */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="subtitle1" fontWeight="600" gutterBottom>Manual Pump Control</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box display="flex" gap={2} flexWrap="wrap">
              <Button variant="contained" color="success" startIcon={<PlayArrowIcon />} onClick={() => setPumpStatus(true)} disabled={pumpStatus} sx={{ px: 4, py: 1.5 }}>Start Pump</Button>
              <Button variant="contained" color="error" startIcon={<StopIcon />} onClick={() => setPumpStatus(false)} disabled={!pumpStatus} sx={{ px: 4, py: 1.5 }}>Stop Pump</Button>
              <Button variant="outlined" startIcon={<ScheduleIcon />} sx={{ px: 4, py: 1.5 }}>Schedule</Button>
            </Box>
            {pumpStatus && <Chip label="Pump is RUNNING • Flow: 2.5 L/min" color="info" sx={{ mt: 2, width: '100%', py: 1 }} />}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LiveFeed;
