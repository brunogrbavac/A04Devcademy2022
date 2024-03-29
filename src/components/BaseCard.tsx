import { Box, Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { flexCCC } from "../data/style";
import { accommodationData } from "../types/data";

interface Props extends React.PropsWithChildren {
    content:accommodationData;
    place?:boolean
};

const BaseCard:React.FC<Props> = ({content, children, place}) => {

    const theme = useTheme();

    return(
        <Card sx={{width:"100%", height:{xs: 158, md:"auto"}, boxShadow:"none"}}>
            <Box sx={{display:{xs:"flex", md:"block"}, flexDirection:"row", alignItems:"flex-start", gap:"20px"}}>
                <CardMedia
                    component="img"
                    image={content.imageUrl?content.imageUrl:"https://images.sail-croatia.com/destinations/makarska/makarska-thumb.jpg?w=600&h=362&fit=crop&auto=format,enhance&q=65"}
                    alt="Accommodation"
                    sx={{width:{xs:158, md:"100%"}, height:{xs:158, md:266}, borderRadius:"12px"}}
                />
                <CardContent sx={{...flexCCC, p:0, height:{xs:158, md:"auto"}, alignItems:"flex-start",}}>
                    <Typography variant="h6" sx={{m:{xs:"8px 0", md:"20px 0 10px 0"}, textAlign:"left", fontSize:{xs:"16px", md:"20px"}, fontWeight:500}}>
                        {content.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{m:{xs:"0 0 12px 0", md:"0 0 20px 0"}, color:theme.palette.grey[500], fontSize:{xs:"14px", md:"16px"}, fontWeight:400}}>
                        {content.location?.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{fontSize:{xs:"14px"}, fontWeight:500}}>
                        {(place!==undefined && place===true)?content.type:`EUR ${content.price}`}
                    </Typography>
                    {children}
                </CardContent>
            </Box>
        </Card>
    );
};

export default BaseCard;