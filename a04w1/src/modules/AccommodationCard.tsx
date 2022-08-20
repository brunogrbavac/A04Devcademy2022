import { Box } from "@mui/material";
import { accommodationData } from "../types/data";
import star from '../images/starFilled.svg';
import BaseCard from "../components/BaseCard";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { accommodationChange } from "../redux/accommodation";

const AccommodationCard:React.FC<{accommodation:accommodationData}> = ({accommodation}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const handleClick = (e: any): void => {
        dispatch(accommodationChange({accommodation:accommodation}));
        navigate(`/details/${accommodation.id}`);
    };

    return(
        <Box onClick={handleClick} sx={{'&:hover':{cursor:"pointer"}}}>
            <BaseCard content={accommodation}>
                <Box sx={{m:{xs:"auto 0 5px 0", md:"13px 0 5px 0"}, display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:"5px"}}>
                    {Array.from({ length: (accommodation.categorization!==null)?accommodation.categorization:0 }, (_, i) => 
                        <Box sx={{display:"flex", height:{xs:"17px", md:"20px"}}} key={i}>
                            <img src={star} alt="Star" style={{objectFit:"cover"}}/>
                        </Box>
                    )}
                </Box>
            </BaseCard>
        </Box>
    );
};

export default AccommodationCard;