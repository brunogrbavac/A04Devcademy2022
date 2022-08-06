import {  CalendarToday, Person, HotelRounded } from "@mui/icons-material";
import { Box, Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import { flexRCC } from "../data/style";


const AdvancedSearch:React.FC = () => {

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(e)
    };

    return(
        <form onSubmit={handleSubmit} style={{display:"flex"}}>
            <Box sx={{...flexRCC, flexDirection:{xs:"column", md:"row"}, justifyContent:"flex-start", gap:"15px", width:"100%"}}>
                <TextField type="date" label="Check in" placeholder=" " color="warning" variant="outlined" sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarToday/>
                        </InputAdornment>
                )}}/>
                <TextField type="date" label="Check out" placeholder=" " color="warning" variant="outlined" sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarToday/>
                        </InputAdornment>
                )}}/>
                <TextField label="How many people?" placeholder=" " color="warning" variant="outlined" sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person/>
                        </InputAdornment>
                )}}/>
                <TextField select label="Type" type="select" color="warning" variant="outlined" sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <HotelRounded/>
                        </InputAdornment>
                )}}>
                    <MenuItem value={"Apartment"}>Apartment</MenuItem>
                    <MenuItem value={"Room"}>Room</MenuItem>
                    <MenuItem value={"Mobile home"}>Mobile home</MenuItem>
                </TextField>
                <Button variant="contained" type="submit" sx={{p:"15px 44px", color:"white", boxSizing:"border-box", width:{xs:"100%", md:"auto"}}}>SEARCH</Button>
            </Box>
      </form>
    );
};

export default AdvancedSearch;