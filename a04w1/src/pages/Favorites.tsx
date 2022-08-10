import { accommodationDefaultData } from "../data/dummyData";
import AccommodationGrid from "../modules/AccommodationGrid";

const Favorites:React.FC = () => {

    return(
        <AccommodationGrid title="Homes guests love" accommodations={accommodationDefaultData}/>
    );
};

export default Favorites;