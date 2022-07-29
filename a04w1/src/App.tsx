import { ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import theme from './style/theme';
import Main from './modules/Main';
import AccommodationDetail from './modules/AccommodationDetail';
import { accommodationDetailDefaultData } from './data/dummyData';
import './App.css';
import Layout from './modules/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/details/:id" element={<AccommodationDetail accommodation={accommodationDetailDefaultData}/>}/>  
            <Route path="*" element={<Main/>}/>
          </Routes>      
        </Layout>
      </div>
    </ThemeProvider>

  );
}

export default App;