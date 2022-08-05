import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { flexRCC } from "../data/style";
import { Link } from "react-router-dom";

const NavigationDrawer:React.FC<{navigationItems:string[], drawerOpen:boolean, handleDrawerToggle:any}> = ({navigationItems, drawerOpen, handleDrawerToggle}) => {
    return(
        <Drawer open={drawerOpen} onClose={handleDrawerToggle} sx={{ display: {xs: 'block', md: 'none'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 320, zIndex:11}}} >
          <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="body2" sx={{...flexRCC, m:"30px", textAlign: "right", justifyContent:"flex-end", cursor:"pointer"}} color="primary">
                <Close/> CLOSE
            </Typography>
            <List>
                {navigationItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={`/${item.split(' ').join('').toLowerCase()}`} style={{textDecoration:"none", color:"black", width:"100%"}}>
                            <ListItemButton sx={{textAlign: 'left'}}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
          </Box>        
        </Drawer>
    );
};

export default NavigationDrawer;