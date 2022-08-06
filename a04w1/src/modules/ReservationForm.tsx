import { Box, Button, Grid, TextField } from "@mui/material";
import { flexCCC } from "../data/style";

const ReservationForm:React.FC = () => {
    return(
        <form onSubmit={(e)=>{e.preventDefault();console.log(e);}}>
            <Box sx={{...flexCCC, gap:{xs:"24px",md:"28px"}, width:"100%"}}>
                <Grid item xs={12} sx={{width:"100%"}}>
                    <TextField variant="outlined" placeholder="Full Name" sx={{width:"100%"}} color="warning"/>
                </Grid>
                <Grid item xs={12} sx={{width:"100%"}}>
                    <TextField variant="outlined" placeholder="Email address" sx={{width:"100%"}} color="warning"/>
                </Grid>
                <Grid item xs={12} sx={{width:"100%"}}>
                    <TextField variant="outlined" placeholder="Number of guests" sx={{width:"100%"}} color="warning"/>
                </Grid>
                <Grid container item direction="row" xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <TextField type="date" variant="outlined" placeholder="Check out" sx={{width:"100%"}} color="warning"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField type="date" variant="outlined" placeholder="Check out" sx={{width:"100%"}} color="warning"/>
                    </Grid>              
                </Grid>
                <Grid container item direction="row" justifyContent="flex-end" xs={12} spacing={3} sx={{width:"100%", mt:{xs:0, md:"25px"}}}>
                    <Grid item xs={12} md={6}  sx={{width:"100%"}}>
                        <Button type="submit" variant="contained" placeholder="Check out" sx={{color:"white", width:"100%", height:"56px"}} > BOOK YOUR STAY </Button>
                    </Grid>             
                </Grid>
            </Box>
        </form>

    );
};

export default ReservationForm;