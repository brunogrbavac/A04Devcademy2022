import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { accommodationData } from "../types/data";

const PropertyInfo:React.FC<{accommodation:accommodationData}> = ({accommodation}) => {
    return(
        <Box sx={{flex:0.6, position:"relative", minWidth:{xs:"none",md:"300px"}}}>
            <Box sx={{
                position:{xs:"relative",md:"absolute"},
                top:0,
                right:0,
                width:{xs:"auto",md:"300px"},
                height:{xs:"auto",md:"340px"},
                p:"24px", 
                display:"flex" , 
                flexDirection:"column", 
                gap:{xs:"24px", md:"44px"}, 
                textAlign:"left", 
                backgroundColor:"#F2FDFC", 
                borderRadius:"10px"
            }}>
                <Box sx={{display:"flex" , flexDirection:"column", gap:"16px"}}>
                    <Typography variant="h6">
                        Property Info
                    </Typography>
                    <Box sx={{display:"flex" , flexDirection:"column", gap:"12px"}}>
                        <Typography variant="body1">
                            {accommodation.capacity} guests
                        </Typography>
                        <Typography variant="body1">
                            {accommodation.type}
                        </Typography>
                        <Typography variant="body1">
                            EUR {accommodation.price} per night
                        </Typography>
                        <Typography variant="body1">
                            {accommodation.location?.name}
                        </Typography>
                        <Typography variant="body1">
                            {accommodation.location?.postalCode}
                        </Typography>    
                    </Box>
                </Box>
                <Link to="/reservation/1">
                    <Button variant="contained" sx={{width:"100%", m:"auto 0 0 0", color:"white"}}>
                        BOOK YOUR STAY
                    </Button>
                </Link>
            </Box>
        </Box>
        
    );
};

export default PropertyInfo;