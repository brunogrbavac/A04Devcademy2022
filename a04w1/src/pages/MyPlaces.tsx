import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { placeDefaultData } from "../data/dummyData";
import { flexRCC } from "../data/style";
import PlaceCard from "../modules/PlaceCard";


const MyPlaces:React.FC = () => {
    return(
        <Box sx={{p:{xs:"20px", md:"0 90px"}, boxSizing:"border-box"}}>
            <Box sx={{...flexRCC, justifyContent:"space-between", m:{xs:"25px 0 25px 0", md:"30px 0 55px 0"}}}>
                <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"34px"}}} fontWeight={400}>
                    My places
                </Typography>
                <Link to="/add">
                    <Button variant="contained" sx={{color:"white", width:"165px", height:"42px", display:{xs:"none", md:"inline-flex"}}}>ADD NEW PLACE</Button>
                    </Link>
            </Box>
            <Grid container spacing={4}>
                {placeDefaultData.map((place, index) => 
                    <Grid item xs={12} sm={6} lg={3} xl={2} key={index}>
                        <PlaceCard place={place}/>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default MyPlaces;