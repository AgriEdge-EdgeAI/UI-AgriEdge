import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1b8c2e',
      light: '#4caf50',
      dark: '#0d5c1f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d9742e',
      light: '#e8945a',
      dark: '#b85a1a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f0f4ef',
      paper: '#ffffff',
    },
    success: { main: '#1b8c2e', light: '#4caf50', dark: '#0d5c1f' },
    warning: { main: '#f5a623', light: '#f7b84d', dark: '#e68a00' },
    error: { main: '#e53935', light: '#ef5350', dark: '#c62828' },
    info: { main: '#0288d1', light: '#29b6f6', dark: '#01579b' },
    text: {
      primary: '#111111',
      secondary: '#444444',
      disabled: '#999999',
    },
    divider: '#e0e4dc',
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '3.5rem' },
    h2: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '2.5rem' },
    h3: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 700, fontSize: '2rem' },
    h4: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 700, fontSize: '1.5rem' },
    h5: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 600, fontSize: '1.25rem' },
    h6: { fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 600, fontSize: '1rem' },
    button: { fontFamily: '"Inter", sans-serif', fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#f0f4ef',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          border: '1px solid #e8ece4',
          borderRadius: 20,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 30px -12px rgba(27, 140, 46, 0.15), 0 0 0 1px rgba(27, 140, 46, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          border: '1px solid #e8ece4',
          borderRadius: 20,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 24px -12px rgba(27, 140, 46, 0.12)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #1b8c2e 0%, #2eae40 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2eae40 0%, #1b8c2e 100%)',
            boxShadow: '0 8px 20px -8px rgba(27, 140, 46, 0.5)',
          },
        },
        outlined: {
          borderColor: '#1b8c2e',
          color: '#1b8c2e',
          '&:hover': {
            borderColor: '#2eae40',
            background: 'rgba(27, 140, 46, 0.04)',
            boxShadow: '0 4px 12px rgba(27, 140, 46, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          borderBottom: '1px solid #e8ece4',
          boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
          color: '#111111',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
});
