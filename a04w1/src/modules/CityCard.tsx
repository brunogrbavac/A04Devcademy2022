import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { flexCCC } from "../data/style";
import { accommodationSearchChange } from "../redux/accommodationSearch";
import { useAppDispatch } from "../redux/hooks";
import { locationData } from "../types/data";

const CityCard:React.FC<{city: locationData}> = ({city}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const handleClick = (e:any): void => {
        e.preventDefault();
        
        dispatch(accommodationSearchChange({accommodation:{        
            type:  null,
            checkIn: null,
            checkOut: null,
            personCount: null,
            location: city,
        }}));
        navigate(`/locations/${city?.id}`);
    };

    return(
        <Card onClick={handleClick} sx={{ height:{xs:155, md:295}, borderRadius: "12px", position: "relative"/*, width:*/}}>
            <CardActionArea sx={{ 
                display: "contents", 
                position: "relative", 
                "&::after": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    content: '""',
                    height: "100%",
                    width: "100%",
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%)",
            }}}>
                <CardMedia component="img" sx={{height:"100%"}} image={city.imageUrl} alt="City"/>
                <CardContent sx={{ 
                    ...flexCCC,
                    backgroundColor: "transparent", 
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    color: "white", 
                    zIndex:"10", 
                    textAlign:"left", 
                    alignItems:"flex-start", 
                    gap:{md:"8px"}, 
                    p: {xs:"16px 8px", md: "20px 15px"}
                }}>
                    <Typography variant="h5" sx={{fontSize:{xs:"16px", md:"24px"}}}>
                        {city.name}
                    </Typography>
                    <Typography variant="h6"  sx={{fontSize:{xs:"14px", md:"20px"}, fontWeight:400}}>
                        {city.properties} properties
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CityCard;
