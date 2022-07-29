import { Card, CardContent, CardMedia, CardActionArea, Typography} from "@mui/material";
import { citySizeStyle } from '../types/style';
import { cityData } from "../types/data";
import newyork from '../images/newyork.png';
import { flexCCC } from "../data/style";

const CityCard:React.FC<{size:string, city: cityData}> = ({size, city}) => {

    const getStyleForSize = (size: string):citySizeStyle =>{
        switch(size){
            case "large":
                return {padding:"20px 20px", width:620};
            case "medium":
                return {padding:"20px 13px", width:405};
            case "small":
                return {padding:"20px 10px", width:295};
            default:
                return {padding:"20px 10px", width:295};
        };
    };

    return(
        <Card sx={{ height:{xs:155, md:295}, borderRadius: "12px", position: "relative", width:{xs: 155, md:getStyleForSize(size).width}}}>
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
                <CardMedia component="img" sx={{height:"100%"}} image={newyork} alt="City"/>
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
                    p: {xs:"16px 8px", md:getStyleForSize(size).padding}
                }}>
                    <Typography variant="h5" sx={{fontSize:{xs:"16px", md:"24px"}}}>
                        {city.name}
                    </Typography>
                    <Typography variant="h6"  sx={{fontSize:{xs:"14px", md:"20px"}, fontWeight:400}}>
                        {city.count} properties
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CityCard;
