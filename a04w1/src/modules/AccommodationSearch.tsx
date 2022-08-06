import { DirectionsCar, CalendarToday, Person, HotelRounded } from "@mui/icons-material";
import { Button, InputAdornment, MenuItem,  TextField } from "@mui/material";
import { Box } from "@mui/system";
import { flexRCC } from "../data/style";

const AccommodationSearch:React.FC = () => {

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(e)
    };

    return(
        <form onSubmit={handleSubmit} style={{display:"flex", width:"100%"}}>
            <Box sx={{...flexRCC, flexDirection:{xs:"column", md:"row"}, justifyContent:"flex-start", gap:"15px", width:"100%"}}>
                <TextField color="warning" sx={{flex:1, width:{xs:"100%", md:"auto"}}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <DirectionsCar/>
                        </InputAdornment>
                )}}/>
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
                <Button variant="contained" type="submit" sx={{p:"15px 44px", color:"white"}}>SEARCH</Button>
            </Box>
      </form>
    );
};

export default AccommodationSearch;