import { Grid, Typography } from "@mui/material";
import { cityDefaultData } from "../data/dummyData";
import { flexRCC } from "../data/style";
import CityCard from "../modules/CityCard";
import SimpleSearch from "../modules/SimpleSearch";


const Locations:React.FC = () => {
    return(
        <Grid container  sx={{p:{xs:"20px", md:"45px 90px"}}}>
            <Grid item xs={12} sx={{...flexRCC, justifyContent:"flex-start"}}>
                <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"34px"} , fontWeight:400}}>
                    All locations
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{m:"40px 0 50px 0"}}>
                <SimpleSearch/>
            </Grid>
            <Grid item container xs={12} spacing={4}>
                {cityDefaultData.map((city, index) => 
                    <Grid item xs={6} md={4} lg={3} key={index}>
                        <CityCard city={city}/>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default Locations;