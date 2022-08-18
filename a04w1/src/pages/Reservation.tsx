import { Box, Grid, Typography } from "@mui/material";
import { flexCCC } from "../data/style";
import ReservationCard from "../modules/ReservationCard";
import ReservationForm from "../modules/ReservationForm";
import { useAppSelector } from "../redux/hooks";


const Reservation:React.FC = () => {

    const accommodation = useAppSelector(store => store.accommodation);

    return(
        <Grid container sx={{width:"100%", p:{xs:"24px", lg:"45px 90px"}, position:"relative"}} direction="row">
            <Grid item xs={12} sx={{width:"100%"}}>
                <Typography variant="h4" sx={{textAlign:"left", mb:{xs:0, md:"45px"}, fontWeight:400, fontSize:{xs:"24px", md:"32px"}}} color="warning">Book your stay</Typography>
            </Grid>
            <Grid container xs={12} sx={{flexDirection:{xs:"column", md:"row-reverse"}, flexWrap:"nowrap"}}>
                <Grid item xs={12} md={8} xl={6}>
                    <Box sx={{ ...flexCCC, p:{xs:"20px", lg:"0 90px"}, wdith:"100%"}}>
                        <ReservationCard accommodation={accommodation}/>
                    </Box>                
                </Grid>
                <Grid item xs={12} md={4} xl={6}>
                    <ReservationForm accommodation={accommodation}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Reservation;
