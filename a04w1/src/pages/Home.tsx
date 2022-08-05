import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { accommodationDefaultData, cityDefaultData } from "../data/dummyData";
import AccommodationCard from "../modules/AccommodationCard";
import CityCard from "../modules/CityCard";
import Header from "../modules/Header";
import { ArrowRight } from "@mui/icons-material";
import { flexRCC } from "../data/style";
import { Link } from "react-router-dom";
import AccommodationSearch from "../modules/AccommodationSearch";

//Just for showcase purposes.
const Home:React.FC = () => {
    return(
        <>
            <Header/>
            <Box  sx={{p:{xs:"20px", md:"45px 90px", position:"relative",boxSizing:"border-box", width:"100%"}}}>
                <Paper sx={{p:"45px 30px",borderRadius:"20px", position:"absolute", top:{xs:"-100px",md:"-75px"},left:{xs:"20px",md:"90px"}, right:{xs:"20px",md:"90px"},zIndex:50, height:{xs:"400px",md:"auto"}}}>
                    <AccommodationSearch/>
                </Paper>
                <Box sx={{...flexRCC, width:"100%", m:{xs:"400px 0 25px 0", md:"80px 0 40px 0"}, justifyContent:"space-between"}}> 
                    <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"32px"}, fontWeight:400}}>Popular locations</Typography> 
                    <Link to="/locations">
                        <Button variant="text" sx={{fontSize:{xs:"13px", md:"15px"}}}>VIEW ALL LOCATIONS <ArrowRight/></Button>
                    </Link>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <CityCard city={cityDefaultData[0]}/>
                    </Grid>
                    <Grid item xs={6}>
                        <CityCard city={cityDefaultData[1]}/>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <CityCard city={cityDefaultData[2]}/>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <CityCard city={cityDefaultData[2]}/>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <CityCard city={cityDefaultData[2]}/>
                    </Grid>
                </Grid>

                <Box sx={{...flexRCC, width:"100%", m:{xs:"40px 0 25px 0", md:"80px 0 40px 0"}, justifyContent:"space-between"}}> 
                    <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"32px"}, fontWeight:400}}>Homes guests love</Typography> 
                    <Link to="/favorites">
                        <Button variant="text" sx={{fontSize:{xs:"13px", md:"15px"}}}>VIEW ALL HOMES <ArrowRight/></Button>
                    </Link>
                </Box>
                
                <Grid container spacing={4} sx={{width:"100%", justifyContent:"flex-start"}} wrap="nowrap" direction="row" >
                    {accommodationDefaultData.slice(0,4).map((accommodation, index) => 
                        <Grid item key={index}>
                            <AccommodationCard accommodation={accommodation} key={index}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    );
};

export default Home;