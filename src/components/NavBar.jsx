import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function NavBar() {
    return (
        <Box sx={{
            flexGrow: 1
        }}
        >
            <AppBar position="static" sx={{
                height: { xs: "55px", md: "50px" },
                display: 'flex',
                justifyContent: "center"

            }}>
                <Toolbar variant="dense" sx={{
                    justifyContent: "start",
                    alignItems: "center",
                }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{
                        mr: { xs: 1, md: 1.5 },

                    }}>
                        <PhotoCameraIcon
                            sx={{
                                height: { xs: "30px", md: "40px" }
                            }} />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{
                        fontSize: { xs: "20px", md: "20px" },
                        fontWeight: "500",


                    }}>
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}