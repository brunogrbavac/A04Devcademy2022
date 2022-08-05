import { Close, FilterList } from "@mui/icons-material";
import { Box, Button, Drawer, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { accommodationDefaultData } from "../data/dummyData";
import { flexCCC, flexRCC } from "../data/style";
import AccommodationCard from '../modules/AccommodationCard';
import AdvancedSearch from "../modules/AdvancedSearch";

const Favorites:React.FC = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };


    return(
        <Box sx={{p:{xs:"25px 20px", md:"45px 90px"}}}>
            <Box sx={{...flexRCC, justifyContent:"space-between", alignItems:"flex-start"}}>
            <Box sx={{...flexCCC, alignItems:"flex-start", width:"100%"}}>
                <Typography variant="h4" sx={{marginTop:{xs:"0", md:"30px"}, fontSize:{xs:"24px", md:"34px"}, fontWeight:400}}>
                    Homes guests love
                </Typography>

                <Typography variant="subtitle1" color={grey[500]}>
                    {accommodationDefaultData.length} properties
                </Typography>
            </Box>
            <Button startIcon={<FilterList/>}  sx={{display:{xs:"inline-flex", md:"none"}}} onClick={()=>{setDrawerOpen(true)}}>
                    FILTERS
            </Button>
            </Box>
            <Box sx={{m:"40px 0 50px 0", width:"100%", display:{xs:"none", md:"block"}}}>
                <AdvancedSearch/>
            </Box>
            <Grid container spacing={4} sx={{mt:{xs:"5px", md:0}}}>
                {accommodationDefaultData.map((accommodation, index) => 
                    <Grid item xs={12} md={4} lg={3} key={index}>
                        <AccommodationCard accommodation={accommodation} key={index}/>
                    </Grid>
                )}
            </Grid>
            <Drawer hideBackdrop={true} anchor="right" open={drawerOpen} onClose={handleDrawerToggle} sx={{ display: {xs: 'block', md: 'none'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 320},  zIndex:15}} >
                <Box onClick={handleDrawerToggle} sx={{textAlign: 'center', p:"80px 24px 0 24px", gap:"20px"}}>
                    <Typography variant="body2" sx={{...flexRCC, mb:"24px", textAlign: "left", justifyContent:"flex-start", cursor:"pointer"}} color="primary">
                        <Close/> CLOSE
                    </Typography>
                </Box>   
                <Box sx={{p:"24px"}}>
                    <AdvancedSearch/>
                </Box>     
                
            </Drawer>
        </Box>
    );
};

export default Favorites;