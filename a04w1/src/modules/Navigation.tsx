import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NavigationDrawer from "../components/NavigationDrawer";
import { flexRCC } from "../data/style";
import { Link } from "react-router-dom";
import { navigationData } from "../types/data";

const navItems:navigationData[] = [{
    name:'Locations',
    url:"/locations",
},{
    name:'My Places',
    url:'/myplaces',
},{ 
    name:'My Bookings',
    url: '/mybookings',
}];

const Navigation:React.FC = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <AppBar component="nav" sx={{...flexRCC, height: {xs: "56px", md:"64px"}, p: {xs: "4px 12px", md:"16px 76px"}, backgroundColor:"white", zIndex:100}} >
                <Toolbar sx={{...flexRCC, p:0, justifyContent: "space-between", flex: 1}}>
                    <Box sx={{...flexRCC, gap:"16px"}}>
                        <IconButton edge="start" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }} >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/">
                            <Typography variant="h6" sx={{color:"black !important"}}>
                                Staycation
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{...flexRCC, display: { xs: 'none', md: 'flex' }, gap:"48px" }}>
                        {navItems.map((item, index) => (
                            <Button key={index} sx={{ color: 'black', fontSize:"16px", fontWeight: 400}}>
                                <Link to={item.url} style={{textDecoration:"none", color:"black"}}>{item.name}</Link>
                            </Button>
                        ))}
                    </Box>
                    <Button sx={{ color: 'black', fontSize:"14px", fontWeight: 500 }}>
                        LOGOUT
                    </Button>
                </Toolbar>
            </AppBar>
            <NavigationDrawer navigationItems={navItems} handleDrawerToggle={()=>handleDrawerToggle()} drawerOpen={drawerOpen}/>
        </>
    );
};

export default Navigation;
