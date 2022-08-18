import { Box } from "@mui/material";
import PropertyInfo from "../components/PropertyInfo";
import { flexC } from "../data/style";
import AccommodationDescription from "../components/AccommodationDescription";
import { useAppSelector } from "../redux/hooks";

const AccommodationDetail:React.FC = () => {
    const accomm = useAppSelector(store => store.accommodation);

    return(
        <Box sx={{...flexC, p:{xs:"20px", md:"30px 90px"} , gap:"20px"}}>
            <Box sx={{display:"flex", overflow:"hidden", width:"100%", borderRadius:"12px", height:{xs:"200px", md:"430px"}}}>
                <img src={accomm.imageUrl!==null?accomm.imageUrl:undefined} alt="Accommodation" style={{objectFit:"cover", height:"100%", width:"100%"}}/>
            </Box>
            <Box sx={{display:"flex" , flexDirection:{xs:"column", md:"row"}, gap:"20px"}}>
                <AccommodationDescription accommodation={accomm}/>
                <PropertyInfo accommodation={accomm}/>
            </Box>
        </Box>
    );
};

export default AccommodationDetail;
