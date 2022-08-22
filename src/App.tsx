import { ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import AccommodationDetail from './modules/AccommodationDetail';
import Layout from './modules/Layout';
import AccommodationsByLocation from './pages/AccommodationsByLocation';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Login from './pages/Login';
import MyBookings from './pages/MyBookings';
import MyPlaces from './pages/MyPlaces';
import NewPlaceForm from './pages/NewPlaceForm';
import Reservation from './pages/Reservation';
import { useAppSelector } from './redux/hooks';
import theme from './style/theme';
import useCheckLogin from './utils/login';

function App() {
  useCheckLogin();
  const isLoggedIn = useAppSelector(store => store.user).email!=="";

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/locations" element={<Locations/>}/>
            <Route path="/login" element={isLoggedIn ? <Navigate replace to="/home"/> : <Login/>}/>
            <Route path="/locations/:id" element={<AccommodationsByLocation/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/my-places" element={isLoggedIn ? <MyPlaces/>:<Navigate replace to="/login"/>}/>
            <Route path="/my-bookings" element={isLoggedIn ? <MyBookings/>:<Navigate replace to="/login"/>}/>
            <Route path="/accommodations/:id" element={<AccommodationDetail/>}/>  
            <Route path="/my-places/new" element={isLoggedIn ? <NewPlaceForm/>:<Navigate replace to="/login"/>}/>
            <Route path="/my-places/edit/:id" element={isLoggedIn ? <NewPlaceForm/>:<Navigate replace to="/login"/>}/>
            <Route path="/reservation/:id" element={isLoggedIn ? <Reservation/>:<Navigate replace to="/login"/>}/> 
            <Route path="*" element={<Home/>}/>
          </Routes>      
        </Layout>
      </div>
    </ThemeProvider>

  );
}

export default App;