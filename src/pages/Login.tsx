import { Box, Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../images/loginBackground.png";
import { useAppDispatch } from "../redux/hooks";
import { userChange } from "../redux/user";
import { userData } from "../types/data";


const Login:React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [checked, setChecked] = useState<boolean>(false);
    const [formState, setFormState] = useState<userData>({
        email:'',
        password:'',
    });

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        if(e.target.checkValidity()){
            dispatch(userChange({user:formState}));
            localStorage.setItem('user-credentials', JSON.stringify(formState));
            navigate('/');
        };
    };

    const handleChange = (name:string, value:any) => {
        setFormState({...formState, [name]:value});
    };

    return(
        <Box sx={{width:"100%",height:"95vh", backgroundSize:"cover !important", background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${background});`, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Paper sx={{width:{xs:"90%", md:"400px"}, borderRadius:"8px", boxShadow:"0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);"}}>
                <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column", alignItems:"flex-start", padding:"16px", gap:"16px"}}>
                    <Box sx={{textAlign:"left", marginBottom:"16px"}}>
                        <Typography variant="h5" sx={{fontWeight:400}}>
                            Log in
                        </Typography>
                        <Typography variant="subtitle2" sx={{fontWeight:400, color:"gray"}}>
                            Get started for free
                        </Typography>
                    </Box>
                    <TextField required variant="outlined" type="email" sx={{width:"100%"}} label="Email" name="email" onChange={(e)=>handleChange(e.target.name, e.target.value)} />
                    <TextField required variant="outlined" type="password" sx={{width:"100%"}} label="Password" name="password" onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox value={checked} onChange={(e)=>setChecked(!checked)}/>} label="I accept the Terms and conditions" />
                    </FormGroup>
                    <Button disabled={!checked} variant="contained" type="submit" sx={{width:"100%",height:"42px", color:"white"}}>LOG IN</Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;