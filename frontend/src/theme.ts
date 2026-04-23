import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#16c265', light: '#4ade80', dark: '#0d7a40' },
    secondary: { main: '#d4a373', light: '#e8c99a', dark: '#a07850' },
    background: { default: '#0a0f0d', paper: '#111813' },
    success: { main: '#16c265' },
    warning: { main: '#f59e0b' },
    error: { main: '#ef4444' },
    info: { main: '#38bdf8' },
    text: { primary: '#f0fdf4', secondary: '#6b7f74', disabled: '#3d4f44' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '3.5rem' },
    h2: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '2.5rem' },
    h3: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '2rem' },
    h4: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 600, fontSize: '1.5rem' },
    h5: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 600, fontSize: '1.25rem' },
    h6: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 600, fontSize: '1rem' },
    button: { fontFamily: '"Inter", sans-serif', fontWeight: 600, textTransform: 'none', letterSpacing: '0.01em' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#0a0f0d',
          backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(22,194,101,0.06) 0%, transparent 70%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(17, 24, 19, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(22, 194, 101, 0.08)',
          borderRadius: 20,
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            border: '1px solid rgba(22, 194, 101, 0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(17, 24, 19, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(22, 194, 101, 0.08)',
          borderRadius: 20,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, textTransform: 'none', fontWeight: 600, padding: '10px 24px' },
        contained: { background: 'linear-gradient(135deg, #16c265 0%, #0d7a40 100%)', '&:hover': { background: 'linear-gradient(135deg, #4ade80 0%, #16c265 100%)', transform: 'translateY(-2px)' } },
        outlined: { borderColor: 'rgba(22, 194, 101, 0.4)', color: '#16c265', '&:hover': { borderColor: '#16c265', background: 'rgba(22,194,101,0.06)', transform: 'translateY(-2px)' } },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { background: 'rgba(10, 15, 13, 0.8)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(22, 194, 101, 0.1)', boxShadow: 'none' },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: '"Inter", sans-serif' },
      },
    },
  },
});
