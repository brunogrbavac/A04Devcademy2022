import { Box, Button } from "@mui/material";
import BaseCard from "../components/BaseCard";
import { placeData } from "../types/data";

const PlaceCard:React.FC<{place:placeData}> = ({place}) => {
    return(
        <BaseCard content={place}>
            <Box sx={{m:{xs:"auto 0 8px 0", md:"28px 0 8px 0"}, display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:"28px"}}>
                <Button variant="text" color="primary" sx={{p:0, minWidth:0, fontSize:"14px"}}> EDIT </Button>
                <Button variant="text" color="error" sx={{p:0, minWidth:0, fontSize:"14px"}}> DELETE PLACE </Button>
            </Box>
        </BaseCard>
    );
};

export default PlaceCard;