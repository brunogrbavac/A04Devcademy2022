import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseCard from "../components/BaseCard";
import { accommodationData } from "../types/data";
import { deleteData } from "../utils/fetch";
import MyPlaceDeleteModal from "./MyPlaceDeleteModal";

const PlaceCard:React.FC<{place:accommodationData, handleDelete:Function}> = ({place, handleDelete}) => {
    const [openDialog, setOpenDialog] = useState(()=>false);
    const [confirmed, setConfirmed] = useState(()=>false);

    const deletePlace = async() => {
        try{
            await deleteData(`https://devcademy.herokuapp.com/api/Accomodations/${place.id}`);
        }catch(err) {
            console.log(err);
        };
    };

    useEffect(()=>{
        if(confirmed){
            deletePlace();
            handleDelete(place.id);
        };
    },[confirmed]);

    return(
        <>
            <BaseCard content={place} place>
                <Box sx={{m:{xs:"auto 0 8px 0", md:"28px 0 8px 0"}, display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:"28px"}}>
                    <Link to={`/my-places/edit/${place.id}`}><Button variant="text" color="primary" sx={{p:0, minWidth:0, fontSize:"14px"}}> EDIT </Button></Link>
                    <Button variant="text" color="error" sx={{p:0, minWidth:0, fontSize:"14px"}} onClick={()=>setOpenDialog(true)}> DELETE PLACE </Button>
                </Box>
            </BaseCard>
            <MyPlaceDeleteModal open={openDialog} handleClose={()=>setOpenDialog(false)} handleConfirm={()=>{setConfirmed(true);setOpenDialog(false);}}/>
        </>
    );
};

export default PlaceCard;