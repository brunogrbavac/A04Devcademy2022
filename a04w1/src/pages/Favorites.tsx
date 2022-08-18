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

    const fetchHomes = async() => {
        try{
            const data = await fetchData("https://devcademy.herokuapp.com/api/Accomodations");
            setHomes(data);
            setLoading(false);
        }catch(err) {
            console.log(err);
        };
    };

    useEffect(()=>{
        let arr = homes.filter(home => {
            console.log(home)
            console.log(searched)
            return(
                (searched.type===null || (searched.type === home.type))   
                &&(searched.personCount===null || (searched.personCount === home.capacity))  
        )});
        setAccommodationToDisplay(arr);
    },[homes, searched]);

    useEffect(()=>{
        fetchHomes();
    },[]);

    return(
        !loading?<AccommodationGrid title="Homes guests love" accommodations={accommodationToDisplay}/>:null
    );
};

export default Favorites;