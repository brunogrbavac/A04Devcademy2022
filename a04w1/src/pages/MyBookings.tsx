 
import { Box, Grid, Typography } from "@mui/material";
import { accommodationDefaultData } from "../data/dummyData";
import { flexCCC } from "../data/style";
import AccommodationCard from "../modules/AccommodationCard";


const MyBookings:React.FC = () => {
    return(
        <Box sx={{p:{xs:"20px", md:"0 90px"}, boxSizing:"border-box"}}>
            <Box sx={{...flexCCC, alignItems:"flex-start"}}>
                <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"34px"}, m:{xs:"25px 0 25px 0", md:"30px 0 55px 0"}}} fontWeight={400}>
                    My bookings
                </Typography>
                <Typography variant="h5" sx={{fontSize:{xs:"20px", md:"24px"}, marginBottom:{xs:"20px", md:"30px"}}} fontWeight={400}>
                    Upcoming bookings
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {accommodationDefaultData.map((accommodation, index) => 
                    <Grid item xs={12} sm={6} lg={3} xl={2} key={index}>
                        <AccommodationCard accommodation={accommodation}/>
                    </Grid>
                )}
            </Grid>

            <Box sx={{...flexCCC, alignItems:"flex-start", m:{xs:"35px 0 25px 0", md:"50px 0 30px 0"}}}>
                <Typography variant="h5" sx={{fontSize:{xs:"20px", md:"24px"}}} fontWeight={400}>
                    Past bookings
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {accommodationDefaultData.map((accommodation, index) => 
                    <Grid item xs={12} sm={6} lg={3} xl={2} key={index}>
                        <AccommodationCard accommodation={accommodation}/>
                    </Grid>
                )}
            </Grid>

        </Box>
    );
};

export default MyBookings;