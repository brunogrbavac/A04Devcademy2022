import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccommodationGrid from "../modules/AccommodationGrid";
import { useAppSelector } from "../redux/hooks";
import { accommodationData } from "../types/data";
import { fetchData } from "../utils/fetch";

const AccommodationsByLocation:React.FC = () => {
    const {id} = useParams();
    const searched = useAppSelector(store => store.accommodationSearch);
    const [accommodationToDisplay, setAccommodationToDisplay] = useState<accommodationData[]>(()=>[]);
    const [loading, setLoading] = useState<boolean>(()=>true);
    const [homes, setHomes] = useState<accommodationData[]>(()=>[]);

    const fetchHomes = async() => {
        try{
            const data = await fetchData(`https://devcademy.herokuapp.com/api/Accomodations/location?locationId=${id}`);
            setHomes(data);
            setLoading(false);
        }catch(err) {
            console.log(err);
        };
    };

    useEffect(()=>{
        fetchHomes();
    },[]);

    useEffect(()=>{
        let arr = homes.filter(home => {
            console.log(home)
            console.log(searched)
            return(
                (searched.location===null || ( home.locationID===searched.location.id))
                &&(searched.type===null || (searched.type.toLowerCase() === home.type?.toLowerCase()))   
                &&(searched.personCount===null || (searched.personCount === home.capacity))  
        )});
        console.log(arr);
        setAccommodationToDisplay(arr);
    },[homes, searched]);

    return(
        !loading?<AccommodationGrid title={`Stays in ${searched.location?.name}`} accommodations={accommodationToDisplay}/>:null
    );
};

export default AccommodationsByLocation;