import { Box, Grid } from "@mui/material";
import { accommodationDefaultData, accommodationDetailDefaultData, cityDefaultData, placeDefaultData } from "../data/dummyData";
import AccommodationCard from "./AccommodationCard";
import AccommodationDetail from "./AccommodationDetail";
import CityCard from "./CityCard";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation"
import PlaceCard from "./PlaceCard";


//Just for showcase purposes.
const Main:React.FC = () => {
    const places = new Array(3).fill(<Grid item><PlaceCard place={placeDefaultData}/></Grid>);
    const accommods = new Array(3).fill(<Grid item><AccommodationCard accommodation={accommodationDefaultData}/></Grid>);

    return(
        <>
            <Navigation/>
            <Box sx={{margin:{xs:"56px 0 ",md:"64px 0"}}}>
                <Header/>
                <AccommodationDetail accommodation={accommodationDetailDefaultData}/>
                <Grid container spacing={2} sx={{p:{xs:"20px", md:"90px"}}}>
                    <Grid item>
                        <CityCard size="small" city={cityDefaultData}/>
                    </Grid>
                    <Grid item>
                        <CityCard size="medium" city={cityDefaultData}/>
                    </Grid>
                    <Grid item>
                        <CityCard size="large" city={cityDefaultData}/>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{p:{xs:"20px", md:"90px"}}}>
                    {places}
                </Grid>
                <Grid container spacing={4} sx={{p:{xs:"20px", md:"90px"}}}>
                    {accommods}
                </Grid>
            </Box>
            <Footer/>
        </>
    );
};

export default Main;