import { useEffect, useState } from "react";
import AccommodationGrid from "../modules/AccommodationGrid";
import { useAppSelector } from "../redux/hooks";
import { accommodationData } from "../types/data";
import { fetchData } from "../utils/fetch";

const AccommodationsByLocation:React.FC = () => {
    const searched = useAppSelector(store => store.accommodationSearch);
    const [accommodationToDisplay, setAccommodationToDisplay] = useState<accommodationData[]>(()=>[]);
    const [loading, setLoading] = useState<boolean>(()=>true);
    const [homes, setHomes] = useState<accommodationData[]>(()=>[]);

    const fetchHomes = async() => {
        try{
            //Nisam koristio Addomodations/location rutu jer nisam siguran 
            const data = await fetchData(`https://devcademy.herokuapp.com/api/Accomodations/location?locationId=${searched.location?.id}`);
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
                &&(searched.type===null || (searched.type === home.type))   
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