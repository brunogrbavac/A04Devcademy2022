import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { flexRCC } from "../data/style";
import PlaceCard from "../modules/PlaceCard";
import { accommodationData } from "../types/data";
import { fetchData } from "../utils/fetch";


const MyPlaces:React.FC = () => {
    const [loading, setLoading] = useState<boolean>(()=>true);
    const [places, setPlaces] = useState<accommodationData[]>(()=>[]);

    const fetchPlaces = async() => {
        //Nema rute za my places niti ikakvog user ID.a pa sam čisto bez veze koristio ovu rutu.
        try{
            const data = await fetchData("https://devcademy.herokuapp.com/api/Accomodations/recommendation");
            setPlaces(data);
            setLoading(false);
        }catch(err) {
            console.log(err);
        };
    };

    const filterAfterDelete = (id:string) => {
        let arr = places.filter((place)=> place.id!==id);
        setPlaces(arr);
    };

    useEffect(()=>{
        fetchPlaces();
    },[]);


    return(
        <Box sx={{p:{xs:"20px", md:"0 90px"}, boxSizing:"border-box"}}>
            <Box sx={{...flexRCC, justifyContent:"space-between", m:{xs:"25px 0 25px 0", md:"30px 0 55px 0"}}}>
                <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"34px"}}} fontWeight={400}>
                    My places
                </Typography>
                <Link to="/my-places/new">
                    <Button variant="contained" sx={{color:"white", width:"165px", height:"42px", display:{xs:"none", md:"inline-flex"}}}>ADD NEW PLACE</Button>
                    </Link>
            </Box>
            {!loading?<Grid container spacing={4}>
                {places.map((place, index) => 
                    <Grid item xs={12} sm={6} lg={3} xl={2} key={index}>
                        <PlaceCard place={place} handleDelete={filterAfterDelete}/>
                    </Grid>
                )}
            </Grid>:null}
        </Box>
    );
};

export default MyPlaces;