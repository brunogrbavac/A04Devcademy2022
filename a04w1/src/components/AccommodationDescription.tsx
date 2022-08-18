import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { flexC, flexRCC } from "../data/style";
import { accommodationData } from "../types/data";
import calendar from '../images/calendar.svg';
import star from '../images/starFilled.svg';

const AccommodationDescription:React.FC<{accommodation: accommodationData}> = ({accommodation}) => {
    return(
        <Box sx={{...flexC, gap:"20px", flex:1}}>
            <Box sx={{...flexC, gap:{xs:"16px", md:"40px"}, textAlign:"left"}}>
                <Box sx={{...flexC, gap:"12px"}}>
                    <Box sx={{display:"flex", flexDirection:{xs:"column", md: "row"}, gap:{xs:"12px", md:"20px"}}}>
                        <Typography variant="h5" sx={{fontSize:{xs:"24px", md:"34px"}, fontWeight:400}}>
                            {accommodation.title}
                        </Typography>
                        <Box sx={{...flexRCC, justifyContent:"flex-start", gap:{xs:"1px", md:"5px"}}}>
                            {Array.from({ length: (accommodation.categorization!==null)?accommodation.categorization:0  }, (_, i) => 
                                <Box sx={{display:"flex", height:{xs:"17px", md:"20px"}}}>
                                    <img key={i} src={star} alt="Star" style={{objectFit:"cover"}}/>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <Typography variant="body1" sx={{color:grey[500]}}>
                        {accommodation.subtitle}
                    </Typography>
                </Box>
                <Box sx={{display:"flex", flexDirection:"row", gap:"15px"}}>
                    <Box sx={{display:"flex", height:"23px"}}>
                        <img src={calendar} alt="Calendar" style={{objectFit:"cover"}}/>
                    </Box>
                    <Typography variant="body1" sx={{fontWeight:600}}>
                        {accommodation.freeCancelation?"Free cancelation available.":"Free cancelation NOT available."}
                    </Typography>
                </Box>
            </Box>
            <Typography variant="body2" sx={{textAlign:"left"}}>
                {accommodation.description}
            </Typography>
        </Box>
    );
};

export default AccommodationDescription;