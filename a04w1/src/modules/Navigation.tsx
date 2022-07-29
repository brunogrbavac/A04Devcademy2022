import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NavigationDrawer from "../components/NavigationDrawer";
import { flexRCC } from "../data/style";

const navItems = ['Locations', 'My Places', 'My Bookings'];

const Navigation:React.FC = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <AppBar component="nav" sx={{...flexRCC, height: {xs: "56px", md:"64px"}, p: {xs: "4px 12px", md:"16px 76px"}, backgroundColor:"white"}} >
                <Toolbar sx={{...flexRCC, p:0, justifyContent: "space-between", flex: 1}}>
                    <Box sx={{...flexRCC, gap:"16px"}}>
                        <IconButton edge="start" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }} >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Staycation
                        </Typography>
                    </Box>
                    <Box sx={{...flexRCC, display: { xs: 'none', md: 'flex' }, gap:"48px" }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'black', fontSize:"16px", fontWeight: 400}}>
                                {item}
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
