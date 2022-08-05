import { Box, Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { flexCCC } from "../data/style";
import { accommodationData, placeData } from "../types/data";
import newyork from '../images/newyork.png';

interface Props extends React.PropsWithChildren {
    content:accommodationData | placeData;
};

const BaseCard:React.FC<Props> = ({content, children}) => {

    const theme = useTheme();

    return(
        <Card sx={{width:"100%", height:{xs: 158, md:"auto"}, boxShadow:"none"}}>
            <Box sx={{display:{xs:"flex", md:"block"}, flexDirection:"row", alignItems:"flex-start", gap:"20px"}}>
                <CardMedia
                    component="img"
                    image={newyork}
                    alt="Accommodation"
                    sx={{width:{xs:158, md:"100%"}, height:{xs:158, md:266}, borderRadius:"12px"}}
                />
                <CardContent sx={{...flexCCC, p:0, height:{xs:158, md:"auto"}, alignItems:"flex-start",}}>
                    <Typography variant="h6" sx={{m:{xs:"8px 0", md:"20px 0 10px 0"}, textAlign:"left", fontSize:{xs:"16px", md:"20px"}, fontWeight:500}}>
                        {content.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{m:{xs:"0 0 12px 0", md:"0 0 20px 0"}, color:theme.palette.grey[500], fontSize:{xs:"14px", md:"16px"}, fontWeight:400}}>
                        {content.location}
                    </Typography>
                    <Typography variant="subtitle2" sx={{fontSize:{xs:"14px"}, fontWeight:500}}>
                        {(content.hasOwnProperty("price"))?`EUR ${(content as accommodationData).price}`:(content as placeData).subtitle}
                    </Typography>
                    {children}
                </CardContent>
            </Box>
        </Card>
    );
};

export default BaseCard;