import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Avatar, Divider, Container } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FilterListIcon from '@mui/icons-material/FilterList';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const historyData = [
  { date: 'Jan 15, 2026', time: '10:30 AM', event: 'Irrigation Activated', value: '12 L', insight: '94% need predicted', severity: 'Normal', color: '#16c265' },
  { date: 'Jan 15, 2026', time: '08:15 AM', event: 'Alert: Low Moisture', value: '45%', insight: 'Below threshold', severity: 'Moderate', color: '#f59e0b' },
  { date: 'Jan 15, 2026', time: '06:00 AM', event: 'System Check', value: 'All OK', insight: '—', severity: 'Normal', color: '#16c265' },
  { date: 'Jan 14, 2026', time: '05:30 PM', event: 'Irrigation Completed', value: '15 L', insight: '87% need predicted', severity: 'Normal', color: '#16c265' },
  { date: 'Jan 14, 2026', time: '02:00 PM', event: 'Manual Override', value: '8 L', insight: 'User triggered', severity: 'Low', color: '#38bdf8' },
  { date: 'Jan 13, 2026', time: '09:10 AM', event: 'Alert: High Temp', value: '38°C', insight: 'Heat stress risk', severity: 'High', color: '#ef4444' },
  { date: 'Jan 13, 2026', time: '07:00 AM', event: 'Irrigation Activated', value: '18 L', insight: '91% need predicted', severity: 'Normal', color: '#16c265' },
];

const waterSavingsData = [
  { week: 'Week 1', used: 4200, saved: 2850 },
  { week: 'Week 2', used: 3980, saved: 3120 },
  { week: 'Week 3', used: 4050, saved: 2980 },
  { week: 'Week 4', used: 3780, saved: 3550 },
];

const SEVERITY_FILTERS = ['All', 'Normal', 'Moderate', 'High', 'Low'];

const History: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? historyData : historyData.filter(r => r.severity === filter);

  const totalUsed = waterSavingsData.reduce((sum, w) => sum + w.used, 0);
  const totalSaved = waterSavingsData.reduce((sum, w) => sum + w.saved, 0);
  const savingsPercent = Math.round((totalSaved / totalUsed) * 100);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: '#f0fdf4' }}>
            Detection History
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7f74' }}>
            Irrigation events, alerts, and ML model performance
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" startIcon={<DownloadIcon />} sx={{ borderRadius: 2 }}>
            Export CSV
          </Button>
          <Button variant="outlined" startIcon={<PictureAsPdfIcon />} sx={{ borderRadius: 2, borderColor: 'rgba(212,163,115,0.4)', color: '#d4a373' }}>
            PDF Report
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Events Table */}
        <Grid size={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar sx={{ bgcolor: 'rgba(22,194,101,0.15)', width: 40, height: 40 }}>
                  <FilterListIcon sx={{ color: '#16c265' }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0fdf4' }}>
                  Irrigation Events
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {SEVERITY_FILTERS.map(f => (
                  <Chip 
                    key={f} 
                    label={f} 
                    onClick={() => setFilter(f)}
                    sx={{ 
                      cursor: 'pointer',
                      bgcolor: filter === f ? 'rgba(22,194,101,0.15)' : 'transparent',
                      border: filter === f ? '1px solid rgba(22,194,101,0.3)' : '1px solid rgba(61,79,68,0.4)',
                      color: filter === f ? '#16c265' : '#6b7f74',
                      '&:hover': { borderColor: 'rgba(22,194,101,0.3)' }
                    }} 
                  />
                ))}
              </Box>
            </Box>
            <Divider sx={{ mb: 2 }} />
            
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: 'rgba(22,194,101,0.05)' }}>
                    <TableCell sx={{ fontWeight: 600, color: '#6b7f74' }}>Date & Time</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#6b7f74' }}>Event</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#6b7f74' }}>Value</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#6b7f74' }}>ML Insight</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#6b7f74' }}>Severity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filtered.map((row, i) => (
                    <TableRow key={i} sx={{ '&:hover': { bgcolor: 'rgba(22,194,101,0.03)' } }}>
                      <TableCell>
                        <Typography variant="body2" sx={{ color: '#f0fdf4' }}>{row.date}</Typography>
                        <Typography variant="caption" sx={{ color: '#6b7f74' }}>{row.time}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ color: '#c8d9cf' }}>{row.event}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#16c265' }}>{row.value}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption" sx={{ color: '#6b7f74' }}>{row.insight}</Typography>
                      </TableCell>
                      <TableCell>
                        <Chip 
                          label={row.severity} 
                          size="small" 
                          sx={{ bgcolor: `${row.color}20`, border: `1px solid ${row.color}40`, color: row.color }} 
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Water Savings Chart */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Avatar sx={{ bgcolor: 'rgba(22,194,101,0.15)', width: 40, height: 40 }}>
                <WaterDropIcon sx={{ color: '#16c265' }} />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0fdf4' }}>
                  Water Savings Overview
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7f74' }}>
                  January 2026 — Weekly comparison
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ mb: 3 }} />
            
            <Box sx={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterSavingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(22,194,101,0.1)" />
                  <XAxis dataKey="week" tick={{ fill: '#6b7f74' }} />
                  <YAxis tick={{ fill: '#6b7f74' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="used" name="Water Used" fill="rgba(239,68,68,0.7)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="saved" name="Water Saved" fill="rgba(22,194,101,0.8)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* ML Performance Card */}
        <Grid size={{ xs: 12, lg: 5 }}>
          <Paper sx={{ p: 3, border: '1px solid rgba(22,194,101,0.15)', position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #16c265, #d4a373)' }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Avatar sx={{ bgcolor: 'linear-gradient(135deg, rgba(22,194,101,0.15), rgba(212,163,115,0.1))', width: 48, height: 48 }}>
                <AutoGraphIcon sx={{ color: '#16c265' }} />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0fdf4' }}>
                  ML Model Performance
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7f74' }}>
                  KNN v1.2 · Updated daily
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ mb: 3 }} />
            
            {/* Accuracy Circle */}
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 800, background: 'linear-gradient(135deg, #16c265, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                94%
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7f74' }}>
                Prediction Accuracy
              </Typography>
            </Box>
            
            {/* Metrics Row */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid size={6}>
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(22,194,101,0.05)' }}>
                  <Typography variant="caption" sx={{ color: '#6b7f74' }}>Est. Annual Savings</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#16c265' }}>12,500 L</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(56,189,248,0.05)' }}>
                  <Typography variant="caption" sx={{ color: '#6b7f74' }}>Training Samples</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#38bdf8' }}>2,847</Typography>
                </Box>
              </Grid>
            </Grid>
            
            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button fullWidth variant="outlined" startIcon={<DownloadIcon />} sx={{ py: 1.2 }}>
                Export CSV
              </Button>
              <Button fullWidth variant="outlined" startIcon={<PictureAsPdfIcon />} sx={{ py: 1.2, borderColor: 'rgba(212,163,115,0.4)', color: '#d4a373' }}>
                PDF Report
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default History;
