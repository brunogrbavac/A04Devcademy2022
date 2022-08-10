import { Box, Button, Grid, MenuItem, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Categorization from "../components/Categorization";
import { flexRCC } from "../data/style";


const NewPlaceForm:React.FC = () => {
    const [categorization, setCategorization] = useState(()=>0);

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(e)
    };

    return(
        <Box sx={{p:{xs:"20px", md:"0 90px 100px 90px"}, boxSizing:"border-box", width:"100%"}}>
            <Box sx={{...flexRCC, justifyContent:"flex-start", m:{xs:"25px 0 25px 0", md:"30px 0 55px 0"}}}>
                <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"34px"}}} fontWeight={400}>
                    Add new place
                </Typography>
            </Box>
            <form style={{width:"100%"}} onSubmit={handleSubmit}>
            <Grid container item xs={12} md={5} flexDirection="row" sx={{gap:{xs:"20px", md:"30px"}}}>
                <Grid item xs={12}>
                    <TextField color="warning" name="name" label="Listing name" sx={{width:"100%"}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="shortDescription" label="Short Description" sx={{width:"100%"}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="longDescription" label="Long Description" sx={{width:"100%"}}/>
                </Grid>
                <Grid item xs={12} sx={{display:{xs:"none", md:"flex"}, justifyContent:"space-between"}}>
                    <Typography variant="body1">Categorization</Typography>
                    <Categorization categorization={categorization} setCategorization={setCategorization}/>
                </Grid>
                <Grid item xs={12} sx={{display:{xs:"flex", md:"none"}}}>
                    <TextField select color="warning" name="categorization" label="Categorization" sx={{width:"100%"}} value={categorization} onChange={(e)=>setCategorization(parseInt(e.target.value))}>
                        {Array.from(Array(5).keys()).map(item => <MenuItem value={item+1}>{item+1}</MenuItem>)}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField select color="warning" name="type" label="Accommodation type" sx={{width:"100%"}}>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="capacity" label="Capacity" sx={{width:"100%"}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="price" label="Price" sx={{width:"100%"}}/>
                </Grid>
                <Grid item xs={5.7} md={12}>
                    <TextField color="warning" name="location" label="Location" sx={{width:"100%"}}/>
                </Grid>  
                <Grid item xs={5.6} md={12}>
                    <TextField color="warning" name="postalCode" label="Postal code" sx={{width:"100%"}}/>
                </Grid>  
                <Grid item xs={12}>
                    <TextField color="warning" name="imageURL" label="Listing image URL" sx={{width:"100%"}}/>
                </Grid>     
                <Grid item container xs={12}sx={{...flexRCC, justifyContent:"space-between"}}>
                    <Typography variant="body1">Free cancelation available</Typography>
                    <Switch />
                </Grid>
                <Grid item container xs={12} justifyContent="flex-end">
                    <Button variant="contained" type="submit" sx={{color:"white", width:{xs:"100%", md:"156px"}, margin:"25px 0 0 0", alignSelf:"self-end"}}>ADD NEW PLACE</Button>
                </Grid>
            </Grid>
            </form>
        </Box>
    );
};

export default NewPlaceForm;