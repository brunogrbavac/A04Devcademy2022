import Box from "@mui/material/Box";
import starFilled from '../images/starFilled.svg';
import star from '../images/star.svg';

const Categorization:React.FC<{categorization:number, setCategorization:Function}> = ({categorization, setCategorization}) => {
    
    return(
        <Box sx={{m:{xs:"0 0 15px 0", md:"0 0 20px 0"}, display:"flex", flexDirection:"row", justifyaccommodation:"flex-start", alignItems:"center", gap:"5px"}}>
        {Array.from(Array(5).keys()).map((item, index)=> 
            <Box key={index} sx={{display:"flex", height:{xs:"17px", md:"24px"}}}>
                <img src={(categorization>=(index+1))?starFilled:star} alt="Star" style={{objectFit:"cover"}} onClick={()=>setCategorization(index+1)}/>
            </Box>
        )}
        </Box> 
    );
};

export default Categorization;