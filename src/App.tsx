import { ThemeProvider, Typography, createTheme } from '@mui/material';
import './App.css';
import JobFilters from './components/JobFilters/JobFilters';
import JobPosts from './components/JobPosts/JobPosts';

const theme = createTheme({
  palette: {
    primary: {
      main: '#55EFC4',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
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
        <JobPosts />
      </ThemeProvider>
    </main>
  );
}

export default App;
