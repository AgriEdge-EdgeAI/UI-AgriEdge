import React, { useState } from 'react';
import { 
  Grid, Paper, Typography, Box, Button, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, Chip, 
  Avatar, Divider, Container, TablePagination 
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FilterListIcon from '@mui/icons-material/FilterList';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const historyData = [
  { date: 'Jan 15, 2026', time: '10:30 AM', event: 'Irrigation Activated', value: '12 L', insight: '94% need predicted', severity: 'Normal', color: '#1b8c2e' },
  { date: 'Jan 15, 2026', time: '08:15 AM', event: 'Alert: Low Moisture', value: '45%', insight: 'Below threshold', severity: 'Moderate', color: '#f5a623' },
  { date: 'Jan 15, 2026', time: '06:00 AM', event: 'System Check', value: 'All OK', insight: '—', severity: 'Normal', color: '#1b8c2e' },
  { date: 'Jan 14, 2026', time: '05:30 PM', event: 'Irrigation Completed', value: '15 L', insight: '87% need predicted', severity: 'Normal', color: '#1b8c2e' },
  { date: 'Jan 14, 2026', time: '02:00 PM', event: 'Manual Override', value: '8 L', insight: 'User triggered', severity: 'Low', color: '#0288d1' },
  { date: 'Jan 13, 2026', time: '09:10 AM', event: 'Alert: High Temp', value: '38°C', insight: 'Heat stress risk', severity: 'High', color: '#e53935' },
  { date: 'Jan 13, 2026', time: '07:00 AM', event: 'Irrigation Activated', value: '18 L', insight: '91% need predicted', severity: 'Normal', color: '#1b8c2e' },
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const filtered = filter === 'All' ? historyData : historyData.filter(r => r.severity === filter);
  const paginatedData = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  const totalUsed = waterSavingsData.reduce((sum, w) => sum + w.used, 0);
  const totalSaved = waterSavingsData.reduce((sum, w) => sum + w.saved, 0);
  const savingsPercent = Math.round((totalSaved / totalUsed) * 100);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: '#111111' }}>
            Detection History
          </Typography>
          <Typography variant="body2" sx={{ color: '#444444' }}>
            Irrigation events, alerts, and ML model performance
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" startIcon={<DownloadIcon />} sx={{ borderRadius: 2, '&:hover': { transform: 'translateY(-2px)' } }}>
            Export CSV
          </Button>
          <Button variant="outlined" startIcon={<PictureAsPdfIcon />} sx={{ borderRadius: 2, borderColor: '#d9742e', color: '#d9742e', '&:hover': { transform: 'translateY(-2px)' } }}>
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
                <Avatar sx={{ bgcolor: 'rgba(27,140,46,0.08)', width: 40, height: 40 }}>
                  <FilterListIcon sx={{ color: '#1b8c2e' }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#111111' }}>
                  Irrigation Events
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {SEVERITY_FILTERS.map(f => (
                  <Chip 
                    key={f} 
                    label={f} 
                    onClick={() => { setFilter(f); setPage(0); }}
                    sx={{ 
                      cursor: 'pointer', transition: 'all 0.2s ease',
                      bgcolor: filter === f ? '#1b8c2e' : 'transparent',
                      color: filter === f ? '#fff' : '#444444',
                      border: filter === f ? 'none' : '1px solid #e0e4dc',
                      '&:hover': { transform: 'translateY(-2px)', bgcolor: filter === f ? '#1b8c2e' : 'rgba(27,140,46,0.08)' }
                    }} 
                  />
                ))}
              </Box>
            </Box>
            
            <Divider sx={{ mb: 2 }} />
            
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f7f0' }}>
                    <TableCell sx={{ fontWeight: 600, color: '#111111' }}>Date & Time</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#111111' }}>Event</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#111111' }}>Value</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#111111' }}>ML Insight</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#111111' }}>Severity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((row, i) => (
                    <TableRow 
                      key={i} 
                      sx={{ 
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: 'rgba(27,140,46,0.04)', transform: 'scale(1.01)' }
                      }}
                    >
                      <TableCell>
                        <Typography variant="body2" sx={{ color: '#111111', fontWeight: 500 }}>{row.date}</Typography>
                        <Typography variant="caption" sx={{ color: '#666666' }}>{row.time}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ color: '#111111' }}>{row.event}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1b8c2e' }}>{row.value}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption" sx={{ color: '#444444' }}>{row.insight}</Typography>
                      </TableCell>
                      <TableCell>
                        <Chip 
                          label={row.severity} 
                          size="small" 
                          sx={{ 
                            bgcolor: `${row.color}15`, 
                            border: `1px solid ${row.color}30`, 
                            color: row.color,
                            fontWeight: 600
                          }} 
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filtered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_, newPage) => setPage(newPage)}
              onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
              sx={{ color: '#444444' }}
            />
          </Paper>
        </Grid>

        {/* Water Savings Chart */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper sx={{ p: 3, '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px -12px rgba(27,140,46,0.15)' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Avatar sx={{ bgcolor: 'rgba(27,140,46,0.08)', width: 40, height: 40 }}>
                <WaterDropIcon sx={{ color: '#1b8c2e' }} />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#111111' }}>
                  Water Savings Overview
                </Typography>
                <Typography variant="caption" sx={{ color: '#666666' }}>
                  January 2026 — Weekly comparison
                </Typography>
              </Box>
            </Box>
            
            <Divider sx={{ mb: 3 }} />
            
            <Box sx={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterSavingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e4dc" />
                  <XAxis dataKey="week" tick={{ fill: '#444444' }} />
                  <YAxis tick={{ fill: '#444444' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="used" name="Water Used" fill="#e53935" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="saved" name="Water Saved" fill="#1b8c2e" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            
            <Box sx={{ mt: 2, p: 2, borderRadius: 2, bgcolor: '#f5f7f0' }}>
              <Typography variant="caption" sx={{ color: '#1b8c2e', fontWeight: 600 }}>
                Total Saved: {totalSaved.toLocaleString()} L · Savings: {savingsPercent}% vs baseline
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* ML Performance Card */}
        <Grid size={{ xs: 12, lg: 5 }}>
          <Paper sx={{ 
            p: 3, 
            border: '1px solid rgba(27,140,46,0.15)', 
            position: 'relative',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px -12px rgba(27,140,46,0.2)' }
          }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #1b8c2e, #d9742e)' }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Avatar sx={{ bgcolor: 'rgba(27,140,46,0.08)', width: 48, height: 48 }}>
                <AutoGraphIcon sx={{ color: '#1b8c2e' }} />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#111111' }}>
                  ML Model Performance
                </Typography>
                <Typography variant="caption" sx={{ color: '#666666' }}>
                  KNN v1.2 · Updated daily
                </Typography>
              </Box>
            </Box>
            
            <Divider sx={{ mb: 3 }} />
            
            {/* Accuracy Display */}
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 800, 
                  background: 'linear-gradient(135deg, #1b8c2e, #4caf50)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                }}
              >
                94%
              </Typography>
              <Typography variant="body2" sx={{ color: '#444444' }}>
                Prediction Accuracy
              </Typography>
            </Box>
            
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid size={6}>
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(27,140,46,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#666666' }}>Est. Annual Savings</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#1b8c2e' }}>12,500 L</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(2,136,209,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#666666' }}>Training Samples</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#0288d1' }}>2,847</Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button fullWidth variant="outlined" startIcon={<DownloadIcon />} sx={{ py: 1.2, '&:hover': { transform: 'translateY(-2px)' } }}>
                Export CSV
              </Button>
              <Button fullWidth variant="outlined" startIcon={<PictureAsPdfIcon />} sx={{ py: 1.2, borderColor: '#d9742e', color: '#d9742e', '&:hover': { transform: 'translateY(-2px)' } }}>
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
