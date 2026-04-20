import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Chip, Card, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GetAppIcon from '@mui/icons-material/GetApp';

// Mock history data
const historyData = [
  { date: 'Jan 15, 2026', time: '10:30 AM', event: 'Irrigation Activated', value: '12L', insight: '94% need', severity: 'Normal', severityColor: '#4caf50' },
  { date: 'Jan 15, 2026', time: '08:15 AM', event: 'Alert: Low Moisture', value: '45%', insight: 'Need water', severity: 'Moderate', severityColor: '#ff9800' },
  { date: 'Jan 15, 2026', time: '06:00 AM', event: 'System Check', value: 'All OK', insight: '-', severity: 'Normal', severityColor: '#4caf50' },
  { date: 'Jan 14, 2026', time: '05:30 PM', event: 'Irrigation Completed', value: '15L', insight: '87% need', severity: 'Normal', severityColor: '#4caf50' },
  { date: 'Jan 14, 2026', time: '02:00 PM', event: 'Alert: High Temp', value: '38°C', insight: 'Evaporation risk', severity: 'High', severityColor: '#f44336' },
  { date: 'Jan 14, 2026', time: '09:00 AM', event: 'Irrigation Activated', value: '10L', insight: '92% need', severity: 'Normal', severityColor: '#4caf50' },
  { date: 'Jan 13, 2026', time: '07:30 PM', event: 'System Check', value: 'All OK', insight: '-', severity: 'Normal', severityColor: '#4caf50' },
  { date: 'Jan 13, 2026', time: '11:00 AM', event: 'Alert: Low Moisture', value: '35%', insight: 'Need water', severity: 'Moderate', severityColor: '#ff9800' },
];

// Water savings data for bar chart
const waterSavingsData = [
  { week: 'Week 1', saved: 2850, used: 4200 },
  { week: 'Week 2', saved: 3120, used: 3980 },
  { week: 'Week 3', saved: 2980, used: 4050 },
  { week: 'Week 4', saved: 3550, used: 3780 },
];

const History: React.FC = () => {
  const [dateFilter, setDateFilter] = useState('Jan 15, 2026');

  return (
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Detection History
      </Typography>

      {/* Filter Section */}
      <Paper sx={{ p: 3, mb: 3, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Typography variant="body2">Date Filter:</Typography>
        <TextField
          type="date"
          size="small"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          sx={{ width: 200 }}
        />
        <Button variant="contained" size="small">Apply</Button>
      </Paper>

      <Grid container spacing={3}>
        {/* History Table */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Irrigation Events</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                    <TableCell><strong>DATE</strong></TableCell>
                    <TableCell><strong>EVENT</strong></TableCell>
                    <TableCell><strong>VALUE</strong></TableCell>
                    <TableCell><strong>ML INSIGHT</strong></TableCell>
                    <TableCell><strong>SEVERITY</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {historyData.map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell>{row.date} {row.time}</TableCell>
                      <TableCell>{row.event}</TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>{row.insight}</TableCell>
                      <TableCell>
                        <Chip 
                          label={row.severity} 
                          size="small" 
                          sx={{ bgcolor: row.severityColor, color: 'white' }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Water Savings Graph */}
        <Grid item xs={12} lg={7}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Water Savings Overview</Typography>
            <Box sx={{ height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterSavingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis yAxisId="left" label={{ value: 'Water Used (L)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Water Saved (L)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="used" name="Water Used" fill="#f44336" />
                  <Bar yAxisId="right" dataKey="saved" name="Water Saved" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* ML Performance Metrics */}
        <Grid item xs={12} lg={5}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>ML Model Performance</Typography>
              
              <Box textAlign="center" py={3}>
                <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 'bold', color: '#2e7d32' }}>
                  94%
                </Typography>
                <Typography variant="body2" color="text.secondary">ML Prediction Accuracy</Typography>
              </Box>

              <Box textAlign="center" py={2}>
                <Typography variant="h4" sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#2196f3' }}>
                  12,500L
                </Typography>
                <Typography variant="body2" color="text.secondary">Estimated Annual Savings</Typography>
              </Box>

              <Box mt={3} display="flex" justifyContent="center" gap={2}>
                <Button variant="outlined" startIcon={<DownloadIcon />} size="small">
                  Export CSV
                </Button>
                <Button variant="outlined" startIcon={<PictureAsPdfIcon />} size="small">
                  PDF Report
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default History;
