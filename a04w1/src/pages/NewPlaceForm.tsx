import { Box, Button, Grid, MenuItem, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Categorization from "../components/Categorization";
import { flexRCC } from "../data/style";
import { accommodationDetailData } from "../types/data";


const NewPlaceForm:React.FC = () => {
    const [formState, setFormState] = useState<accommodationDetailData>({
        title: null,
        subtitle: null,
        description: null,
        type: null,
        categorization: null,
        personCount: null,
        imageUrl: null,
        freeCancelation: null,
        price: null,
        location: null,
        postalCode: null,
    });

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(e)
    };

    const handleChange = (name:string, value:any) => {
        setFormState({...formState, [name]:value});
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
                    <TextField color="warning" name="title" label="Listing name" sx={{width:"100%"}} value={formState.title} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="subtitle" label="Short Description" sx={{width:"100%"}} value={formState.subtitle} onChange={(e)=>handleChange(e.target.name, e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="description" label="Long Description" sx={{width:"100%"}} value={formState.description} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>
                <Grid item xs={12} sx={{display:{xs:"none", md:"flex"}, justifyContent:"space-between"}}>
                    <Typography variant="body1">Categorization</Typography>
                    <Categorization categorization={(formState.categorization!==null)?formState.categorization:0} setCategorization={(val:any)=>handleChange("categorization", val)}/>
                </Grid>
                <Grid item xs={12} sx={{display:{xs:"flex", md:"none"}}}>
                    <TextField select color="warning" name="categorization" label="Categorization" sx={{width:"100%"}} value={(formState.categorization!==null)?formState.categorization:0} onChange={(e)=>handleChange("categorization", parseInt(e.target.value))}>
                        {Array.from(Array(5).keys()).map(item => <MenuItem value={item+1}>{item+1}</MenuItem>)}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField select color="warning" name="type" label="Accommodation type" sx={{width:"100%"}} value={formState.type} onChange={(e)=>handleChange(e.target.name, e.target.value)}>
                        <MenuItem value={"Apartment"}>Apartment</MenuItem>
                        <MenuItem value={"Room"}>Room</MenuItem>
                        <MenuItem value={"Mobile home"}>Mobile home</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="personCount" label="Capacity" sx={{width:"100%"}} value={formState.personCount} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="price" label="Price" sx={{width:"100%"}} value={formState.price} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>
                <Grid item xs={5.7} md={12}>
                    <TextField color="warning" name="location" label="Location" sx={{width:"100%"}} value={formState.location} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>  
                <Grid item xs={5.6} md={12}>
                    <TextField color="warning" name="postalCode" label="Postal code" sx={{width:"100%"}} value={formState.postalCode} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>  
                <Grid item xs={12}>
                    <TextField color="warning" name="imageURL" label="Listing image URL" sx={{width:"100%"}} value={formState.imageUrl} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>     
                <Grid item container xs={12}sx={{...flexRCC, justifyContent:"space-between"}}>
                    <Typography variant="body1">Free cancelation available</Typography>
                    <Switch checked={(formState.freeCancelation!==null)?formState.freeCancelation:false} onChange={(e)=>handleChange("freeCancelation", e.target.value)}/>
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