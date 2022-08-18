import { CalendarToday, DirectionsCar, HotelRounded, Person } from "@mui/icons-material";
import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { flexRCC } from "../data/style";
import { accommodationSearchChange } from "../redux/accommodationSearch";
import { useAppDispatch } from "../redux/hooks";
import { accommodationSearchData, locationData } from "../types/data";

const AccommodationSearch:React.FC<{locations:locationData[]}> = ({locations}) => {
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
        navigate('/location');
    };

    const handleChange = (name:string, value:any) => {
        if(name==="location"){
            let loc = locations.find(location => location.id===value);
            if(loc!==undefined) setFormState({...formState, location:loc});
        } else setFormState({...formState, [name]:value});
    };

    return(
        <form onSubmit={handleSubmit} style={{display:"flex", width:"100%"}}>
            <Box sx={{...flexRCC, flexDirection:{xs:"column", md:"row"}, justifyContent:"flex-start", gap:"15px", width:"100%"}}>
                <TextField select name="location" color="warning" sx={{flex:1, width:{xs:"100%", md:"auto"}}} onChange={(e)=>handleChange(e.target.name, e.target.value)} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <DirectionsCar/>
                        </InputAdornment>
                )}}>
                    {locations.map((city, index) => <MenuItem value={city.id}>{city.name}</MenuItem>)}
                </TextField>
                <TextField type="date" name="checkIn" label="Check in" placeholder=" " color="warning" variant="outlined" sx={{flex:1, width:{xs:"100%", md:"auto"}}}  onChange={(e)=>handleChange(e.target.name, e.target.value)} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarToday/>
                        </InputAdornment>
                )}}/>
                <TextField type="date" name="checkOut" label="Check out" placeholder=" " color="warning" variant="outlined"  onChange={(e)=>handleChange(e.target.name, e.target.value)} sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarToday/>
                        </InputAdornment>
                )}}/>
                <TextField label="How many people?" name="personCount" placeholder=" " color="warning" variant="outlined"  onChange={(e)=>handleChange(e.target.name, parseInt(e.target.value))} sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person/>
                        </InputAdornment>
                )}}/>
                <TextField select label="Type" type="select" name="type" color="warning" variant="outlined"  onChange={(e)=>handleChange(e.target.name, e.target.value)} sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <HotelRounded/>
                        </InputAdornment>
                )}}>
                    <MenuItem value={"Apartment"}>Apartment</MenuItem>
                    <MenuItem value={"Room"}>Room</MenuItem>
                    <MenuItem value={"Mobile home"}>Mobile home</MenuItem>
                </TextField>
                <Button variant="contained" type="submit" sx={{p:"15px 44px", color:"white", width:{xs:"100%", md:"initial"}}}>SEARCH</Button>
            </Box>
      </form>
    );
};

export default AccommodationSearch;