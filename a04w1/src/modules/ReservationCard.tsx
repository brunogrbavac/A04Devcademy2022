import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { flexCCC, flexRCC } from "../data/style";
import { accommodationDetailData } from "../types/data";
import newyork from '../images/newyork.png';
import star from '../images/starFilled.svg';


const ReservationCard:React.FC<{accommodation: accommodationDetailData}> = ({accommodation}) => {

    return(
        <Card sx={{...flexRCC, justifyContent:"flex-start", gap:"20px", width:{xs:"100%" ,md:"620px"}, p:"15px",/*, height:{xs: 158, md:"auto"},*/ boxShadow:"none", border:"1px solid #E3E3E3", borderRadius:"8px"}}>
                <CardMedia
                    component="img"
                    image={newyork}
                    alt="Accommodation"
                    sx={{width:{xs:"inherit", md:210}, minWidth:0, height:{xs:158, md:210}, borderRadius:"4px"}}
                />
                <CardContent sx={{...flexCCC, p:"0 !important", height:{xs:158, md:"auto"}, alignItems:"flex-start", flex:1, minWidth:{xs:"175px",md:"250px"}}}>
                    <Typography variant="h6" sx={{m:"0 0 10px 0", textAlign:"left", fontSize:{xs:"16px", md:"20px"}, fontWeight:500}}>
                        {accommodation.title}
                    </Typography>
                    <Box sx={{m:{xs:"0 0 15px 0", md:"0 0 20px 0"}, display:"flex", flexDirection:"row", justifyaccommodation:"flex-start", alignItems:"center", gap:"5px"}}>
                    {Array.from({ length: accommodation.categorization }, (_, i) => 
                        <Box sx={{display:"flex", height:{xs:"17px", md:"20px"}}}>
                            <img key={i} src={star} alt="Star" style={{objectFit:"cover"}}/>
                        </Box>
                    )}
                    </Box> 
                    <Typography variant="body1" sx={{m:{xs:"0 0 5px 0", md:"0 0 10px 0"}, fontSize:{xs:"14px", md:"16px"}, fontWeight:400}}>
                        {accommodation.categorization}
                    </Typography>
                    <Typography variant="body1" sx={{m:{xs:"0 0 5px 0", md:"0 0 10px 0"}, fontSize:{xs:"14px", md:"16px"}, fontWeight:400}}>
                        {accommodation.location}
                    </Typography>
                    <Typography variant="body1" sx={{m:{xs:"0 0 5px 0", md:"0 0 10px 0"}, fontSize:{xs:"14px", md:"16px"}, fontWeight:400}}>
                        {accommodation.postalCode}
                    </Typography>
                    <Typography variant="body1" sx={{m:{xs:"0 0 5px 0", md:"0 0 10px 0"}, fontSize:{xs:"14px", md:"16px"}, fontWeight:400}}>
                        {accommodation.price}
                    </Typography>

                </CardContent>
        </Card>
    );
};

export default ReservationCard;