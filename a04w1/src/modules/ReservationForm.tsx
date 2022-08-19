import { Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { flexCCC } from "../data/style";
import { accommodationData, bookingData } from "../types/data";
import { postData } from "../utils/fetch";
import ReservationConfirmModal from "./ReservationConfirmModal";

type ValidationError = {
    error: boolean,
    message: string,
};

type ValidationErrors = {
    name:ValidationError,
    email:ValidationError,
    number:ValidationError,
    checkIn:ValidationError,
    checkOut:ValidationError,
};

const initialErrors:ValidationErrors = {
    name:{
        error: false,
        message: "Name invalid (minimum 1 and maximum 300 characters).",
    },
    email:{
        error: false,
        message: "Invalid email address (max 100 characters).",
    },
    number:{
        error: false,
        message: "Number of guests invalid, at least 1 guest.",
    },
    checkIn:{
        error: false,
        message: "Invalid check in date.",
    },
    checkOut:{
        error: false,
        message: "Invalid check out date.",
    }
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

const ReservationForm:React.FC<{accommodation: accommodationData}> = ({accommodation}) => {

    const [errors, dispatch] = useReducer(reducer, initialErrors);
    const [openDialog, setOpenDialog] = useState(()=>false);
    const [confirmed, setConfirmed] = useState(()=>false);
    const navigate = useNavigate();

    const [formState, setFormState] = useState<bookingData>({
        name:null,
        email:null,
        personCount:null,
        checkIn:null,
        checkOut:null,
        accomodaionId: accommodation.id,
        accomodation: accommodation,
    });

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        let nameError = ((formState.name!==undefined && formState.name!==null && formState.name.length>300) || formState.name===null|| formState.name==="");
        let emailError = ((formState.email!==null && formState.email.length>100)|| formState.name===null|| formState.name==="" || !(formState.email!==null && new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$').test(formState.email)));
        let numberError =((formState.personCount!==null && formState.personCount<1) || formState.personCount===null);
        let checkInError = ((formState.checkIn!==null && formState.checkOut!==null && (new Date(formState.checkIn).getTime()>new Date(formState.checkOut).getTime() || new Date(formState.checkIn).getTime()<new Date().getTime())) || formState.checkIn===null);
        let checkOutError =((formState.checkIn!==null && formState.checkOut!==null && ( new Date(formState.checkOut).getTime()<new Date().getTime() || new Date(formState.checkIn).getTime()>new Date(formState.checkOut).getTime())) || formState.checkOut===null)
        
        if(nameError) dispatch({ type: "ERROR", name: "name" })
        else dispatch({ type: "VALID", name: "name" });

        if(emailError) dispatch({ type: "ERROR", name: "email" })
        else dispatch({ type: "VALID", name: "email" });

        if(numberError) dispatch({ type: "ERROR", name: "number" })
        else dispatch({ type: "VALID", name: "number" });
        
        if(checkInError) dispatch({ type: "ERROR", name: "checkIn" })
        else dispatch({ type: "VALID", name: "checkIn" });

        if(checkOutError) dispatch({ type: "ERROR", name: "checkOut" })
        else dispatch({ type: "VALID", name: "checkOut" });

        let check = nameError||emailError||numberError||checkInError||checkOutError;
        console.log(check)

        if(!check){
            setOpenDialog(true);
        };
    };

    const handleChange = (name:string, value:any) => {
        setFormState({...formState, [name]:value});
    };

    const addBooking = async() => {
        try{
            await postData(`https://devcademy.herokuapp.com/api/Reservation`,{
                email: formState.email,
                accomodationId: accommodation.id,
                checkIn: formState.checkIn,
                checkOut: formState.checkOut,
                personCount: formState.personCount,
                confirmed: confirmed,
            });
            setOpenDialog(false);
            navigate('/mybookings');
        }catch(err) {
            console.log(err);
        };
    };

    useEffect(()=>{
        if(confirmed){
            addBooking();
        };
    },[confirmed]);
    
    return(
        <>
            <form onSubmit={(e)=>{e.preventDefault();console.log(e);}}>
                <Box sx={{...flexCCC, gap:{xs:"24px",md:"28px"}, width:"100%"}}>
                    <Grid item xs={12} sx={{width:"100%"}}>
                        <TextField name="name" variant="outlined" placeholder="Full Name" sx={{width:"100%"}} color="warning" error={errors.name.error} helperText={errors.name.error?errors.name.message:null} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sx={{width:"100%"}}>
                        <TextField name="email" variant="outlined" placeholder="Email address" sx={{width:"100%"}} color="warning" error={errors.email.error} helperText={errors.email.error?errors.email.message:null} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sx={{width:"100%"}}>
                        <TextField name="personCount" type="number" variant="outlined" placeholder="Number of guests" sx={{width:"100%"}} color="warning" error={errors.number.error} helperText={errors.number.error?errors.number.message:null} onChange={(e)=>handleChange(e.target.name, parseInt(e.target.value))}/>
                    </Grid>
                    <Grid container item direction="row" xs={12} spacing={3}>
                        <Grid item xs={6}>
                            <TextField name="checkIn" type="date" variant="outlined" placeholder="Check out" sx={{width:"100%"}} color="warning" error={errors.checkIn.error} helperText={errors.checkIn.error?errors.checkIn.message:null} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="checkOut" type="date" variant="outlined" placeholder="Check out" sx={{width:"100%"}} color="warning" error={errors.checkOut.error} helperText={errors.checkOut.error?errors.checkOut.message:null} onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                        </Grid>              
                    </Grid>
                    <Grid container item direction="row" justifyContent="flex-end" xs={12} spacing={3} sx={{width:"100%", mt:{xs:0, md:"25px"}}}>
                        <Grid item xs={12} md={6}  sx={{width:"100%"}}>
                            <Button onClick={handleSubmit} type="submit" variant="contained" placeholder="Check out" sx={{color:"white", width:"100%", height:"56px"}} > BOOK YOUR STAY </Button>
                        </Grid>             
                    </Grid>
                </Box>
            </form>
            <ReservationConfirmModal booking={formState} open={openDialog} handleClose={()=>setOpenDialog(false)} handleConfirm={()=>setConfirmed(true)}/>
        </>
    );
};

export default ReservationForm;