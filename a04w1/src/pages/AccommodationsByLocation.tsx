import { accommodationDefaultData } from "../data/dummyData";
import AccommodationGrid from "../modules/AccommodationGrid";
import { useAppSelector } from "../redux/hooks";

const AccommodationsByLocation:React.FC = () => {
    const searched = useAppSelector(store => store.accommodation);
    return(
        <AccommodationGrid title={`Stays in ${searched.location}`} accommodations={accommodationDefaultData}/>
    );
};

export default AccommodationsByLocation;