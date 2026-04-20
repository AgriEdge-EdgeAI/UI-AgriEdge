import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box, Alert, Grid, InputAdornment, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [formData, setFormData] = useState({
    fullName: '', farmName: '', location: '', email: '', phoneNumber: '', password: '', confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', formData.fullName.split(' ')[0]);
      localStorage.setItem('farmName', formData.farmName);
      localStorage.setItem('location', formData.location);
      navigate('/dashboard');
      setLoading(false);
    }, 1000);
  };

  return (
    <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Paper elevation={0} sx={{ p: 4, maxWidth: 600, width: '100%', borderRadius: 4, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
          <Box textAlign="center" mb={3}>
            <WaterDropIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />
            <Typography variant="h4" fontWeight="700" sx={{ color: theme.palette.primary.main }}>Create Account</Typography>
            <Typography variant="body2" color="text.secondary">Join AgriEdge and start saving water</Typography>
          </Box>
          {error && <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>{error}</Alert>}
          <form onSubmit={handleRegister}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Full Name" name="fullName" onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} /></Grid>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Farm Name" name="farmName" onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} /></Grid>
              <Grid item xs={12}><TextField fullWidth label="Location (District/City)" name="location" onChange={handleChange} required placeholder="e.g., Colombo, Kandy" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} /></Grid>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Email Address" name="email" type="email" onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} /></Grid>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Phone Number" name="phoneNumber" onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Password" name="password" type={showPassword ? 'text' : 'password'} onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment> }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Confirm Password" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment> }} />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" size="large" disabled={loading} sx={{ mt: 3, py: 1.5, borderRadius: 2, background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'transform 0.2s ease' }}>
              {loading ? 'Creating Account...' : 'Register'}
            </Button>
            <Box textAlign="center" mt={2}>
              <Typography variant="body2">Already have an account? <Typography component="span" sx={{ color: theme.palette.secondary.main, cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/login')}>Login</Typography></Typography>
            </Box>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Register;
