import { Box, Typography } from "@mui/material";
import header from '../images/header.png';

const Header:React.FC = () => {
    return(
        <Box sx={{width:"100%", position:"relative", height:{xs:"275px", md:"590px"}, boxSizing:"border-box", overflow:"hidden",
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                content: '""',
                height: "100%",
                width: "100%",
                background: " linear-gradient(90deg, #9C9C9C 0.88%, rgba(217, 217, 217, 0) 100.83%)",
        }}}>
            <img src={header} alt="header" style={{objectFit:"cover", width:"100%", height:"100%"}}/>
            <Box sx={{position:"absolute", top:{xs:"25px", md:"75px"}, left:{xs:"5.33%", md:"6.25%"}, display:"flex", flexDirection:"column", textAlign:"left", gap:{xs:"5px", md:"18px"}, zIndex:10}}>
                <Typography variant="h1" sx={{fontSize:{xs:"24px", md:"96px"}, fontWeight: 700}} color="white">
                    Enjoy your travels
                </Typography>
                <Typography variant="h2" sx={{fontSize:{xs:"20px", md:"48px"}, fontWeight:{xs:600, md:700}}} color="white">
                    with Stycation and collect rewards
                </Typography>
                <Typography  variant="h4" sx={{fontSize:{xs:"16px", md:"32px"}, fontWeight:{xs:600, md:700}}}>
                    Book now {`&`} save 10% or more today
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;