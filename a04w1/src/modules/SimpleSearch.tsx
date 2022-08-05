import { DirectionsCar } from "@mui/icons-material";
import { Box, Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import { cityDefaultData } from "../data/dummyData";
import { flexRCC } from "../data/style";

const SimpleSearch:React.FC = () => {
    return(
        <Box sx={{...flexRCC, justifyContent:"flex-start", gap:"15px"}}>
            <TextField select label="Wherea are you going?" color="warning" sx={{flex:1, width:"100%", height:"56px"}}
                onChange={(e)=>{console.log("Searched location: "+ e.target)}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <DirectionsCar/>
                        </InputAdornment>
            )}}>
                {cityDefaultData.map((city, index) => <MenuItem value={city.name} key={index}>{city.name}</MenuItem>)}
            </TextField>
            <Button variant="contained" type="submit" sx={{p:"15px 44px", color:"white", display:{xs:"none", md:"inline-flex"}}}>SEARCH</Button>
      </Box>
    );
};

export default SimpleSearch;