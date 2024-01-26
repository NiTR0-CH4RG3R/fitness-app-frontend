import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import { useNavigate, useLocation } from 'react-router-dom';

export default function SideNavigationPanel({ SideNavigationPanelMenuItems = [], drawerWidth = 254, toolbarHeight = 80 }) {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Drawer
            variant='permanent'

            sx={{
                flexShrink: 0,
                width: drawerWidth,
                height: '100vh',
            }}
            PaperProps={{
                /* NOTE : Giving this elevation property higher values makes the color of the paper apear brighter. I do not know what's causing this. I never found any documentation about this, but I suspect that's material ui's doin. */
                /*        This effect is present in the AppBar component as well. It also cause the shadow effect to apear.*/
                elevation: 4,
                sx: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                }

            }}
        >
            <Toolbar
                sx={{
                    height: toolbarHeight
                }}
            />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {SideNavigationPanelMenuItems.map((item) => (
                        <ListItem key={item.title.primary} disablePadding>
                            <ListItemButton sx={{ pl: 4, pr: 4 }} onClick={() => (navigate(item.path))} selected={location.pathname === item.path} >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{ variant: 'h6' }} secondaryTypographyProps={{ variant: 'body2' }} primary={item.title.primary} secondary={item.title.secondary} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer >
    );
}