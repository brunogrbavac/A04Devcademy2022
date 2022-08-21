import { DirectionsCar } from "@mui/icons-material";
import { Box, Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { flexRCC } from "../data/style";
import { accommodationSearchChange } from "../redux/accommodationSearch";
import { useAppDispatch } from "../redux/hooks";
import { accommodationSearchData, locationData } from "../types/data";

const SimpleSearch:React.FC<{locations:locationData[]}> = ({locations}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [formState, setFormState] = useState<accommodationSearchData>({        
        type:  null,
        checkIn: null,
        checkOut: null,
        personCount: null,
        location: null,
    });

    const handleSubmit = (e:any): void => {
        e.preventDefault();
        
        dispatch(accommodationSearchChange({accommodation:formState}));
        navigate(`/locations/${formState.location?.id}`);
    };

    const handleChange = (value:string) => {
        let loc = locations.find((location)=>location.id===value);
        if(loc!==undefined){
            setFormState({...formState, location:loc});
        };
    };

    return(
        <Box sx={{...flexRCC, justifyContent:"flex-start", gap:"15px", flexDirection:{xs:"column",md:"row"}}}>
            <TextField select label="Wherea are you going?" color="warning" sx={{flex:1, width:"100%", height:"56px"}}
                onChange={(e)=>{handleChange(e.target.value)}}
                defaultValue=''
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <DirectionsCar/>
                        </InputAdornment>
            )}}>
                {locations.map((city, index) => <MenuItem value={city.id} key={index}>{city.name}</MenuItem>)}
            </TextField>
            <Button onClick={handleSubmit} variant="contained" type="submit" sx={{p:"15px 44px", color:"white", width:{xs:"100%", md:"initial"}}}>SEARCH</Button>
      </Box>
    );
};

export default SimpleSearch;