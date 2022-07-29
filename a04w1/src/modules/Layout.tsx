import { Box } from "@mui/material";
import { flexCCC } from "../data/style";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout:React.FC<React.PropsWithChildren> = (props) => {
    return(
        <Box sx={{...flexCCC, width:"100%", maxWidth:"100%", marginTop:{xs:"56px", md:"64px"}, minHeight:"100vh" }}>
            <Navigation/>
            {props.children}
            <Footer/>
        </Box>
    );
};

export default Layout;