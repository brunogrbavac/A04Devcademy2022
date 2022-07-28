import { Box, Typography, useTheme } from "@mui/material";
import { flexRCC } from "../data/style";

const Footer:React.FC = () => {
    const theme = useTheme();

    return(
        <Box sx={{
            ...flexRCC, 
            boxSizing:"border-box", 
            width:"100%", 
            justifyContent:"flex-start", 
            height:{xs: "72px", md:"86px"}, 
            p:{xs:"24px 20px", md:"27px 90px"}, 
            backgroundColor: theme.palette.secondary.main
        }}>
            <Typography variant="h5"  sx={{color:"white", textAlign:"left", fontSize:{xs: "16px", md:"24px"}}}>
                Staycation
            </Typography>
        </Box>
    );
};

export default Footer;