import { ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import './App.css';
import AccommodationDetail from './modules/AccommodationDetail';
import Layout from './modules/Layout';
import AccommodationsByLocation from './pages/AccommodationsByLocation';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Locations from './pages/Locations';
import MyBookings from './pages/MyBookings';
import MyPlaces from './pages/MyPlaces';
import NewPlaceForm from './pages/NewPlaceForm';
import Reservation from './pages/Reservation';
import theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/locations" element={<Locations/>}/>
            <Route path="/location" element={<AccommodationsByLocation/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/myplaces" element={<MyPlaces/>}/>
            <Route path="/mybookings" element={<MyBookings/>}/>
            <Route path="/details/:id" element={<AccommodationDetail/>}/>  
            <Route path="/add" element={<NewPlaceForm/>}/>  
            <Route path="/edit/:id" element={<NewPlaceForm/>}/>  
            <Route path="/reservation/:id" element={<Reservation/>}/>  
            <Route path="*" element={<Home/>}/>
          </Routes>      
        </Layout>
      </div>
    </ThemeProvider>

  );
}

export default App;