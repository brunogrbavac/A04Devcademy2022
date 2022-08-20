import { Box, Button, Grid, MenuItem, Switch, TextField, Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Categorization from "../components/Categorization";
import { flexRCC } from "../data/style";
import { accommodationData, locationData } from "../types/data";
import { fetchData, postData, putData } from "../utils/fetch";

type ValidationError = {
    error: boolean,
    message: string,
};

type ValidationErrors = {
    title:ValidationError,
    subtitle:ValidationError,
    categorization:ValidationError,
    type:ValidationError,
    capacity:ValidationError,
    price:ValidationError,
    location:ValidationError,
};

const initialErrors:ValidationErrors = {
    title:{
        error: false,
        message: "Title invalid. (min 1 and max 100 characters)",
    },
    subtitle:{
        error: false,
        message: "Subtitle too long. (max 200 characters)",
    },
    categorization:{
        error: false,
        message: "Categorization invalid, needs to be from 1 to 5.",
    },
    type:{
        error: false,
        message: "Type needs to be either room, appartment or mobileHome.",
    },
    capacity:{
        error: false,
        message: "Invalid capacity, minimal capacity is 1.",
    },
    price:{
        error: false,
        message: "Price is neccessary.",
    },
    location:{
        error: false,
        message: "Invalid location.",
    },
};


const reducer = (state:any, action:any) => {
    switch (action.type) {
        case "ERROR":
                return { ...state, [action.name]:{...state[action.name], error:true}};
        case "VALID":
            return { ...state, [action.name]:{...state[action.name], error:false}};
      default:
        return state;
    }
};

const NewPlaceForm:React.FC = () => {
    const {pathname} = useLocation();
    const { id } = useParams();
    const [errors, dispatch] = useReducer(reducer, initialErrors);
    const [loading, setLoading] = useState<boolean>(()=>true);
    const [locations, setLocations] = useState<locationData[]>(()=>[]);
    const [confirmed, setConfirmed] = useState(()=>false);
    const navigate = useNavigate();

    const [formState, setFormState] = useState<accommodationData>({
        id: '',
        title: '',
        subtitle: '',
        description: '',
        shortDescription: '',
        location: {
            name: '',
            imageUrl: '',
            id: '',
            postalCode: 0,
            properties: 0,
        },
        locationID: '',
        capacity: 0,
        personCount: 0,
        price: 0,
        categorization: 1,
        type: '',
        freeCancelation: true,
        imageUrl: '',
    });

    const fetchLocations = async() => {
        try{
            const data1 = await fetchData("https://devcademy.herokuapp.com/api/Location");
            if(pathname.includes('edit')){
                const data2 = await fetchData(`https://devcademy.herokuapp.com/api/Accomodations/${id}`);
                setFormState(data2);
            };
            setLocations(data1);
            setLoading(false);
        }catch(err) {
            console.log(err);
        };
    };

    useEffect(()=>{
        fetchLocations();
    },[]);



    const addPlace = async() => {
        const toSend = {
            title: formState.title,
            subtitle: formState.subtitle,
            description: formState.description,
            shortDescription: formState.shortDescription,
            location: formState.location,
            locationID: formState.location?.id,
            capacity: formState.capacity,
            personCount: formState.personCount,
            price: formState.price,
            categorization: formState.categorization,
            type: formState.type,
            freeCancelation: formState.freeCancelation,
            imageUrl: formState.imageUrl,
        };

        try{
            if(pathname.includes('edit')){
                await putData(`https://devcademy.herokuapp.com/api/Accomodations/${formState.id}`, toSend);
            }else {
                await postData('https://devcademy.herokuapp.com/api/Accomodations', toSend);
            }
            navigate('/favorites');
        }catch(err) {
            console.log(err);
        };
    };

    useEffect(()=>{
        if(confirmed){
            addPlace();
        };
    },[confirmed]);

    

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        let titleError = ((formState.title!==null && formState.title.length>100) || formState.title===null|| formState.title==="");
        let subtitleError = (formState.shortDescription!==null && formState.shortDescription.length>200);
        let capacityError = ((formState.capacity!==null && formState.capacity<1) || formState.capacity===null|| formState.title==="");
        let priceError = (formState.price===null) || (formState.price!==null && formState.price<=0);
        let typeError= (formState.type==="");
        let locationError= (formState.location===null || formState.location.id==='');

        if(titleError) dispatch({ type: "ERROR", name: "title" })
        else dispatch({ type: "VALID", name: "title" });

        if(subtitleError) dispatch({ type: "ERROR", name: "subtitle" })
        else dispatch({ type: "VALID", name: "subtitle" });

        if(capacityError) dispatch({ type: "ERROR", name: "capacity" })
        else dispatch({ type: "VALID", name: "capacity" });

        if(priceError) dispatch({ type: "ERROR", name: "price" })
        else dispatch({ type: "VALID", name: "price" });

        if(typeError) dispatch({ type: "ERROR", name: "type" })
        else dispatch({ type: "VALID", name: "type" });

        if(typeError) dispatch({ type: "ERROR", name: "location" })
        else dispatch({ type: "VALID", name: "location" });
        let check = titleError||subtitleError||capacityError||priceError||typeError||locationError;

        if(!check){
            setConfirmed(true);
        };
    };

    const handleChange = (name: string, value: any) => {
        if (name === "location") {
            let loc = locations.find(location => location.id === value);
            if(loc!==undefined) setFormState({...formState, location: loc});
        } else if (name === "postalCode" && formState.location) {
            setFormState({ ...formState, location: {
                ...formState.location,
                postalCode: value
        }});
        } else setFormState({ ...formState, [name]: value });
        console.log(formState);
    };

    return(
        <Box sx={{p:{xs:"20px", md:"0 90px 100px 90px"}, boxSizing:"border-box", width:"100%"}}>
            <Box sx={{...flexRCC, justifyContent:"flex-start", m:{xs:"25px 0 25px 0", md:"30px 0 55px 0"}}}>
                <Typography variant="h4" sx={{fontSize:{xs:"24px", md:"34px"}}} fontWeight={400}>
                    {(pathname.includes('edit') ? "Edit place" : "Add new place")}
                </Typography>
            </Box>
            <form style={{width:"100%"}} onSubmit={handleSubmit}>
            <Grid container item xs={12} md={5} flexDirection="row" sx={{gap:{xs:"20px", md:"30px"}}}>
                <Grid item xs={12}>
                    <TextField error={errors.title.error} helperText={errors.title.error?errors.title.message:null} color="warning" name="title" label="Listing name" sx={{width:"100%"}} value={formState.title || ''} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField error={errors.subtitle.error} helperText={errors.subtitle.error?errors.subtitle.message:null} color="warning" name="shortDescription" label="Short Description" sx={{width:"100%"}} value={formState.shortDescription || ''} onChange={(e)=>handleChange(e.target.name, e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField color="warning" name="description" label="Long Description" sx={{width:"100%"}} value={formState.description} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>
                <Grid item xs={12} sx={{display:{xs:"none", md:"flex"}, justifyContent:"space-between"}}>
                    <Typography variant="body1">Categorization</Typography>
                    <Categorization categorization={(formState.categorization!==null)?formState.categorization:0} setCategorization={(val:any)=>handleChange("categorization", val)}/>
                </Grid>
                <Grid item xs={12} sx={{display:{xs:"flex", md:"none"}}}>
                    <TextField error={errors.categorization.error} helperText={errors.categorization.error?errors.categorization.message:null} select color="warning" name="categorization" label="Categorization" sx={{width:"100%"}} value={(formState.categorization!==null)?formState.categorization:0} onChange={(e)=>handleChange("categorization", parseInt(e.target.value))}>
                        {Array.from(Array(5).keys()).map((item, index) => <MenuItem key={index} value={item+1}>{item+1}</MenuItem>)}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField error={errors.type.error} helperText={errors.type.error?errors.type.message:null} select color="warning" name="type" label="Accommodation type" sx={{width:"100%"}} value={formState.type} onChange={(e)=>handleChange(e.target.name, e.target.value)}>
                        <MenuItem value={"apartment"}>Apartment</MenuItem>
                        <MenuItem value={"room"}>Room</MenuItem>
                        <MenuItem value={"mobileHome"}>Mobile home</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField error={errors.capacity.error} helperText={errors.capacity.error?errors.capacity.message:null} color="warning" name="capacity" label="Capacity" sx={{width:"100%"}} value={formState.capacity || ''} onChange={(e)=>handleChange(e.target.name, parseInt(e.target.value))}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField error={errors.price.error} helperText={errors.price.error?errors.price.message:null} color="warning" name="price" label="Price" sx={{width:"100%"}} value={formState.price} onChange={(e)=>handleChange(e.target.name, parseInt(e.target.value))}/>
                </Grid>
                {!loading?<Grid item xs={5.7} md={12}>
                    <TextField select error={errors.location.error} helperText={errors.location.error?errors.location.message:null} color="warning" name="location" label="Location" sx={{width:"100%"}} value={formState.location?.id} onChange={(e)=>handleChange(e.target.name, e.target.value)}>
                        {locations.map((city, index) => <MenuItem value={city.id} key={index}>{city.name}</MenuItem>)}
                    </TextField>
                </Grid>:null}  
                <Grid item xs={5.6} md={12}>
                    <TextField color="warning" name="postalCode" label="Postal code" sx={{width:"100%"}} value={formState.location?.postalCode} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>  
                <Grid item xs={12}>
                    <TextField color="warning" name="imageUrl" label="Listing image URL" sx={{width:"100%"}} value={formState.imageUrl} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                </Grid>     
                <Grid item container xs={12}sx={{...flexRCC, justifyContent:"space-between"}}>
                    <Typography variant="body1">Free cancelation available</Typography>
                    <Switch checked={(formState.freeCancelation!==null)?formState.freeCancelation:false} onChange={(e)=>handleChange("freeCancelation", e.target.value)}/>
                </Grid>
                <Grid item container xs={12} justifyContent="flex-end">
                    <Button variant="contained" type="submit" sx={{color:"white", width:{xs:"100%", md:"156px"}, margin:"25px 0 0 0", alignSelf:"self-end"}}>{(pathname.includes('edit') ? "EDIT PLACE" : "ADD NEW PLACE")}</Button>
                </Grid>
            </Grid>
            </form>
        </Box>
    );
};

export default NewPlaceForm;