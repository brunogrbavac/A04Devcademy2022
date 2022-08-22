import { useEffect, useState } from "react";
import AccommodationGrid from "../modules/AccommodationGrid";
import { useAppSelector } from "../redux/hooks";
import { accommodationData } from "../types/data";
import { fetchData } from "../utils/fetch";

const Favorites:React.FC = () => {
    const searched = useAppSelector(store => store.accommodationSearch);
    const [accommodationToDisplay, setAccommodationToDisplay] = useState<accommodationData[]>(()=>[]);
    const [loading, setLoading] = useState<boolean>(()=>true);
    const [homes, setHomes] = useState<accommodationData[]>(()=>[]);

    useEffect(()=>{
        let arr = homes.filter(home => {
            return(
                (searched.type===null || (searched.type === home.type))   
                &&(searched.personCount===null || (searched.personCount === home.capacity))  
        )});
        setAccommodationToDisplay(arr);
    },[homes, searched]);

    useEffect(() => {
        fetchData("https://devcademy.herokuapp.com/api/Accomodations")
        .then(data=> setHomes(data));
        setLoading(false);
    },[]);

    return(
        !loading?<AccommodationGrid title="Homes guests love" accommodations={accommodationToDisplay}/>:null
    );
};

export default Favorites;