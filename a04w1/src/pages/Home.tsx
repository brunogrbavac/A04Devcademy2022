import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { flexRCC } from "../data/style";
import AccommodationCard from "../modules/AccommodationCard";
import AccommodationSearch from "../modules/AccommodationSearch";
import CityCard from "../modules/CityCard";
import Header from "../modules/Header";
import { useAppDispatch } from "../redux/hooks";
import { locationsChange } from "../redux/locations";
import { accommodationData, locationData } from "../types/data";
import { fetchData } from '../utils/fetch';

//Just for showcase purposes.
const Home:React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [locations, setLocations] = useState<locationData[]>([]);
    const [homes, setHomes] = useState<accommodationData[]>([]);

    const dispatch = useAppDispatch();

    const fetchLocationsAndHomes = async() => {
        try{
            const data1 = await fetchData("https://devcademy.herokuapp.com/api/Accomodations/recommendation");
            const data2 = await fetchData("https://devcademy.herokuapp.com/api/Location");
            setHomes(data1);
            setLocations(data2);
            setLoading(false);
            dispatch(locationsChange({locations:data2}));
        }catch(err) {
            console.log(err);
        };
    };

    useEffect(()=>{
        fetchLocationsAndHomes();
    },[]);

    return(
        <>
            <Header/>
            <Box  sx={{p:{xs:"20px", md:"45px 90px"}, position:"relative",boxSizing:"border-box", width:"100%"}}>
                <Paper sx={{p:"45px 30px",borderRadius:"20px", position:"absolute", top:{xs:"-100px",md:"-75px"},left:{xs:"20px",md:"90px"}, right:{xs:"20px",md:"90px"},zIndex:50, height:{xs:"400px",md:"auto"}}}>
                    <AccommodationSearch locations={locations}/>
                </Paper>
                <Box sx={{...flexRCC, width:"100%", m:{xs:"400px 0 25px 0", md:"80px 0 40px 0"}, justifyContent:"space-between"}}> 
                    <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"32px"}, fontWeight:400}}>Popular locations</Typography> 
                    <Link to="/locations">
                        <Button variant="text" sx={{fontSize:{xs:"13px", md:"15px"}}}>VIEW ALL LOCATIONS <ArrowRight/></Button>
                    </Link>
                </Box>
                {!loading&&<Grid container spacing={4}>
                    {locations.sort((a:locationData,b:locationData)=>{
                        if(a.properties!==null && b.properties!==null){
                            return(b.properties-a.properties)
                        } else return 0;
                    }).slice(0,5).map((cityData, index) =>
                        <Grid item xs={6} md={index <2 ? 0:4} key={index}>  
                            <CityCard city={cityData}/>
                        </Grid>
                    )}
                </Grid>}

                <Box sx={{...flexRCC, width:"100%", m:{xs:"40px 0 25px 0", md:"80px 0 40px 0"}, justifyContent:"space-between"}}> 
                    <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"32px"}, fontWeight:400}}>Homes guests love</Typography> 
                    <Link to="/favorites">
                        <Button variant="text" sx={{fontSize:{xs:"13px", md:"15px"}}}>VIEW ALL HOMES <ArrowRight/></Button>
                    </Link>
                </Box>
                
                {!loading&&<Grid container spacing={4} sx={{width:"100%", justifyContent:"flex-start"}} wrap="nowrap" direction="row" >
                    {homes.slice(0,4).map((accommodation, index) => 
                        <Grid item key={index}>
                            <AccommodationCard accommodation={accommodation} key={index}/>
                        </Grid>
                    )}
                </Grid>}
            </Box>
        </>
    );
};

export default Home;