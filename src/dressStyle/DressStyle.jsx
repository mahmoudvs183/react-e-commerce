import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from '@mui/material';



export default function DressStyle() {
    return (
        <Container sx={{ backgroundColor: "#f0f0f0", borderRadius: "15px", marginTop: "50px", padding: "10px 20px 30px 20px" }}>

            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', marginTop: "30px", textTransform: "uppercase", fontWeight: "800", letterSpacing: ".px" }}>
                browse by Dress Style
            </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ borderRadius: "25px" }} size={4}>
                    <Box className='dress-style-grid'>
                        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: "600", left: "30px", position: "absolute", top: "30px" }}>
                            Casual
                        </Typography>
                        <img className='dress-style-img' src="/image11.png" alt="" />
                    </Box>
                </Grid>
                <Grid className='dress-style-grid' size={8}>
                    <Box>
                        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: "600", left: "30px", position: "absolute", top: "30px" }}>
                            Formal
                        </Typography>
                        <img className='dress-style-img' src="/image13.png" alt="" />
                    </Box>
                </Grid>
                <Grid className='dress-style-grid' size={8}>
                    <Box>
                        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: "600", left: "30px", position: "absolute", top: "30px" }}>
                            Party
                        </Typography>
                        <img className='dress-style-img' src="/image13.png" alt="" />
                    </Box>
                </Grid>
                <Grid className='dress-style-grid' size={4}>
                    <Box>
                        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: "600", left: "30px", position: "absolute", top: "30px" }}>
                            Gym
                        </Typography>
                        <img className='dress-style-img' src="/image14.png" alt="" />
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}
