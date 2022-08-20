import { Box } from "@mui/material";
import PropertyInfo from "../components/PropertyInfo";
import { flexC } from "../data/style";
import AccommodationDescription from "../components/AccommodationDescription";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch";
import { useParams } from "react-router-dom";
import { accommodationData } from "../types/data";

const AccommodationDetail:React.FC = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [accomm, setAccom] = useState<accommodationData>({
        id: null,
        title: null,
        subtitle: null,
        description: null,
        shortDescription: null,
        location: null,
        locationID: null,
        capacity: null,
        personCount: null,
        price: null,
        categorization: null,
        type: null,
        freeCancelation: null,
        imageUrl: null,
    });

    const fetchAccommodation = async () => {
        try {
            const data = await fetchData(`https://devcademy.herokuapp.com/api/Accomodations/${id}`);
            setAccom(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        fetchAccommodation();
    }, []);

    return(
        !loading?<Box sx={{...flexC, p:{xs:"20px", md:"30px 90px"} , gap:"20px"}}>
            <Box sx={{display:"flex", overflow:"hidden", width:"100%", borderRadius:"12px", height:{xs:"200px", md:"430px"}}}>
                <img src={accomm.imageUrl ? accomm.imageUrl : ''} alt="Accommodation" style={{objectFit:"cover", height:"100%", width:"100%"}}/>
            </Box>
            <Box sx={{display:"flex" , flexDirection:{xs:"column", md:"row"}, gap:"20px"}}>
                <AccommodationDescription accommodation={accomm}/>
                <PropertyInfo accommodation={accomm}/>
            </Box>
        </Box>:null
    );
};

export default AccommodationDetail;
