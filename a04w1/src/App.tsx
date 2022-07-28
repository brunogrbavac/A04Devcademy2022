import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import Main from './modules/Main';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Main/>
      </div>
    </ThemeProvider>

  );
}

export default App;
