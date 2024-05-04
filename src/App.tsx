import {  ThemeProvider, Typography, createTheme } from '@mui/material';
import './App.css';
import JobFilters from './components/JobFilters/JobFilters';

const theme = createTheme({
  typography: {
    fontFamily: ['Lexend', 'sans-serif'].join(','),
  },
});
function App() {
  return (
    <main className='jobs-layout'>
      <ThemeProvider theme={theme}>
        <Typography variant='h6' component='h1'>
          👋 Hey There ,
        </Typography>
        <JobFilters />
      </ThemeProvider>
    </main>
  );
}

export default App;
