import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { flexCCC } from "../data/style";
import ReservationCard from "../modules/ReservationCard";
import ReservationForm from "../modules/ReservationForm";
import { accommodationData } from "../types/data";
import { fetchData } from "../utils/fetch";


const Reservation:React.FC = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [accomm, setAccom] = useState<accommodationData>({
        id: null,
        title: null,
        subtitle: null,
        description: null,
        shortDescription: null,
        location: null,
        locationID: null,
        capacity: null,
        personCount: null,
        price: null,
        categorization: null,
        type: null,
        freeCancelation: null,
        imageUrl: null,
    });

    useEffect(() => {
        fetchData(`https://devcademy.herokuapp.com/api/Accomodations/${id}`)
        .then(data=> setAccom(data));
        setLoading(false);
    },[id]);
    
    return(
        <Grid container sx={{width:"100%", p:{xs:"24px", lg:"45px 90px"}, position:"relative"}} direction="row">
            <Grid item xs={12} sx={{width:"100%"}}>
                <Typography variant="h4" sx={{textAlign:"left", mb:{xs:0, md:"45px"}, fontWeight:400, fontSize:{xs:"24px", md:"32px"}}} color="warning">Book your stay</Typography>
            </Grid>
            {!loading?<Grid item container xs={12} sx={{flexDirection:{xs:"column", md:"row-reverse"}, flexWrap:"nowrap"}}>
                <Grid item xs={12} md={8} xl={6}>
                    <Box sx={{ ...flexCCC, p:{xs:"20px", lg:"0 90px"}, wdith:"100%"}}>
                        <ReservationCard accommodation={accomm}/>
                    </Box>                
                </Grid>
                <Grid item xs={12} md={4} xl={6}>
                    <ReservationForm accommodation={accomm}/>
                </Grid>
            </Grid>:null}
        </Grid>
    );
};

export default Reservation;
