import { Container, Typography, Box, Button, Stack, Grid } from '@mui/material';
import MediaCard from './Cards';
export default function Content() {

    return (

        <Container sx={{

            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'


        }} >
            <Box
                sx={{

                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: { xs: '0px 0px', md: '0px 150px' },
                    padding: { xs: '0px 0px', md: '50px 24px' },




                }}>

                <Typography sx={{
                    fontSize: { xs: "56px", md: "60px" },
                    fontWeight: "100",
                    marginBottom: "20px",
                    marginTop: { xs: "55px", md: "20px" },
                    letterSpacing: "0.1px",
                    lineHeight: { xs: "70px", md: "70px" }
                }}>Album layout</Typography>
                <Box sx={{
                    // border: "1px solid red",
                    width: { xs: "100%", md: "70%" }
                }}>
                    <Typography sx={{
                        fontSize: "24px",
                        fontWeight: "350",
                        marginBottom: { xs: "50px", md: "10px" },
                        color: "rgba(0, 0, 0, 0.6)",
                        textAlign: 'center',
                        lineHeight: '1.334'
                    }}>
                        Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks dont simply skip over it entirely.
                    </Typography>
                </Box>




            </Box>
            <Box
                sx={{
                    marginBottom: { xs: '130px', md: '50px' }
                }}>
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Main Call To Action</Button>
                    <Button variant="outlined">Secondary Action</Button>
                </Stack>
            </Box>
            <Box sx={{
                flexGrow: 1,
                margin: { xs: "0px 0px", md: "50px 100px" },
                padding: { xs: "0px 0px", md: "0px 80px" },
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <Grid container spacing={3} marginBottom={"30px"}  >
                    <Grid item xs={12} sm={6} md={4} >
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <MediaCard />
                    </Grid>

                </Grid>

            </Box>

            <Box
                sx={{

                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                    paddingTop: '50px',
                    paddingBottom: '50px',
                    paddingLeft: '24px',
                    paddingRight: '24px'


                }}>

                <Typography sx={{
                    fontSize: "20px",
                    fontWeight: "400",
                    marginBottom: "5px",
                    letterSpacing: "0.1px"
                }}>Footer
                </Typography>
                <Box sx={{
                    // border: "1px solid red",
                    width: "70%"
                }}>
                    <Typography sx={{
                        fontSize: "15px",
                        fontWeight: "350",
                        marginBottom: "5px",
                        color: "rgba(0, 0, 0, 0.6)",
                        textAlign: 'center',
                        lineHeight: '1.334'
                    }}>
                        Something here to give the footer a purpose!Copyright © Your Website 2023.


                    </Typography>
                </Box>




            </Box>








        </Container >

    )
}