import {  CalendarToday, Person, HotelRounded } from "@mui/icons-material";
import { Box, Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { flexRCC } from "../data/style";
import { accommodationSearchChange } from "../redux/accommodationSearch";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


const AdvancedSearch:React.FC = () => {

    const dataSearchedRedux = useAppSelector(store => store.accommodationSearch);
    const [dataSearched, setDataSearched] = useState(()=> dataSearchedRedux);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        dispatch(accommodationSearchChange({accommodation:dataSearched}));
    };

    const handleChange = (name:string, value:any) => {
        setDataSearched({...dataSearched, [name]:value});
    };

    return(
        <form onSubmit={handleSubmit} style={{display:"flex"}}>
            <Box sx={{...flexRCC, flexDirection:{xs:"column", md:"row"}, justifyContent:"flex-start", gap:"15px", width:"100%"}}>
                <TextField type="date" value={dataSearched.checkIn || ''} name="checkIn" label="Check in" placeholder=" " color="warning" variant="outlined" onChange={(e)=>handleChange(e.target.name, e.target.value)} sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarToday/>
                        </InputAdornment>
                )}}/>
                <TextField type="date" value={dataSearched.checkOut || ''} name="checkOut" label="Check out" placeholder=" " color="warning" variant="outlined" onChange={(e)=>handleChange(e.target.name, e.target.value)} sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarToday/>
                        </InputAdornment>
                )}}/>
                <TextField label="How many people?" type="number" value={dataSearched.personCount || ''} name="personCount" placeholder=" " color="warning" variant="outlined" onChange={(e)=>handleChange(e.target.name, parseInt(e.target.value))} sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person/>
                        </InputAdornment>
                )}}/>
                <TextField select label="Type" type="select" value={dataSearched.type || ''} name="type" color="warning" variant="outlined" onChange={(e)=>handleChange(e.target.name, e.target.value)} sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <HotelRounded/>
                        </InputAdornment>
                )}}>
                    <MenuItem value={"apartment"}>Apartment</MenuItem>
                    <MenuItem value={"room"}>Room</MenuItem>
                    <MenuItem value={"mobileHome"}>Mobile home</MenuItem>
                </TextField>
                <Button variant="contained" type="submit" sx={{p:"15px 44px", color:"white", boxSizing:"border-box", width:{xs:"100%", md:"auto"}}}>SEARCH</Button>
            </Box>
      </form>
    );
};

export default AdvancedSearch;