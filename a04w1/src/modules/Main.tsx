import { Grid } from "@mui/material";
import { accommodationDefaultData, cityDefaultData, placeDefaultData } from "../data/dummyData";
import AccommodationCard from "./AccommodationCard";
import CityCard from "./CityCard";
import Header from "./Header";
import PlaceCard from "./PlaceCard";

//Just for showcase purposes.
const Main:React.FC = () => {
    return(
        <>
            <Header/>
            <Grid container spacing={2} sx={{p:{xs:"20px", md:"45px 90px"}}}>
                <Grid item>
                    <CityCard size="small" city={cityDefaultData[0]}/>
                </Grid>
                <Grid item>
                    <CityCard size="medium" city={cityDefaultData[1]}/>
                </Grid>
                <Grid item>
                    <CityCard size="large" city={cityDefaultData[2]}/>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{p:{xs:"20px", md:"90px"}}}>
                {placeDefaultData.map((place, index) =>                 
                    <Grid item>
                        <PlaceCard place={place} key={index}/>
                    </Grid>
                )}
            </Grid>
            <Grid container spacing={4} sx={{p:{xs:"20px", md:"45px 90px"}}}>
                {accommodationDefaultData.map((accommodation, index) => 
                    <Grid item>
                        <AccommodationCard accommodation={accommodation} key={index}/>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default Main;