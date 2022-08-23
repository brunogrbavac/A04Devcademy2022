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
        console.log(homes)
        console.log(searched)
        let arr = homes.filter(home => {
            return(
                (searched.type===null || (home.type!==null && searched.type.toLowerCase() === home.type.toLowerCase()))   
                &&(searched.personCount===null || isNaN(searched.personCount) || (searched.personCount === home.capacity))  
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