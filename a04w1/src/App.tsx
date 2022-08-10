import { ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import theme from './style/theme';
import Home from './pages/Home';
import AccommodationDetail from './modules/AccommodationDetail';
import { accommodationDetailDefaultData } from './data/dummyData';
import './App.css';
import Layout from './modules/Layout';
import Locations from './pages/Locations';
import MyPlaces from './pages/MyPlaces';
import MyBookings from './pages/MyBookings';
import Favorites from './pages/Favorites';
import Reservation from './pages/Reservation';
import AccommodationsByLocation from './pages/AccommodationsByLocation';
import NewPlaceForm from './pages/NewPlaceForm';

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
            <Route path="/details/:id" element={<AccommodationDetail accommodation={accommodationDetailDefaultData}/>}/>  
            <Route path="/add" element={<NewPlaceForm/>}/>  
            <Route path="/reservation/:id" element={<Reservation/>}/>  
            <Route path="*" element={<Home/>}/>
          </Routes>      
        </Layout>
      </div>
    </ThemeProvider>

  );
}

export default App;