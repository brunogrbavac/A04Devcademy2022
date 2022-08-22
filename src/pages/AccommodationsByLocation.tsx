import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccommodationGrid from "../modules/AccommodationGrid";
import { useAppSelector } from "../redux/hooks";
import { accommodationData } from "../types/data";
import { fetchData } from "../utils/fetch";

const AccommodationsByLocation:React.FC = () => {
    const {id} = useParams();
    const reduxSearched = useAppSelector(store => store.accommodationSearch)
    const [searched, setSearched] = useState(reduxSearched);
    const [accommodationToDisplay, setAccommodationToDisplay] = useState<accommodationData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [homes, setHomes] = useState<accommodationData[]>([]);

    useEffect(() => {
        fetchData(`https://devcademy.herokuapp.com/api/Accomodations/location?locationId=${id}`)
        .then(response=> setHomes(response));
        fetchData(`https://devcademy.herokuapp.com/api/Location`)
        .then(response=> setSearched({...searched, location:response.find((item:any) => item.id === id)}));
        setLoading(false);
    },[id]);

    useEffect(()=>{
        let arr = homes.filter(home => {
            return(
                (searched.location===null || ( home.locationID===searched.location.id))
                &&(searched.type===null || (searched.type.toLowerCase() === home.type?.toLowerCase()))   
                &&(searched.personCount===null || (searched.personCount === home.capacity))  
        )});
        setAccommodationToDisplay(arr);
    },[homes, searched]);

    return(
        !loading?<AccommodationGrid title={`Stays in ${searched.location?.name}`} accommodations={accommodationToDisplay}/>:null
    );
};

export default AccommodationsByLocation;