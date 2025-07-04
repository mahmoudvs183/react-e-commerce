import { Box, Container, Stack, Typography, Button, Divider } from "@mui/material";
import "./main.css"

export default function Main() {
    return (
        <Box  className="main-box">
            <Container className="main-box-container">
                <img className="main-photo" src="/Rectangle10.png" alt="" />
                <Stack display="flex" justifyContent="space-between" alignItems="start" width="410px" position="absolute" sx={{ top: "10%", left: "25px", height: "80%" }} textAlign="center" color="#000">
                    <Typography mb={2} sx={{ fontWeight: 800, textAlign: "start" }} variant="h3">find clothes that matches your style</Typography>
                    <Typography sx={{ textAlign: "start", color: "#00000090" }} variant="body1">Discover the latest trends and styles tailored just for you.</Typography>
                    <Button sx={{ mt: 2, borderRadius: "62px", width: "210px", color: "#fff", backgroundColor: "#000", textTransform: "capitalize" }} variant="contained">Shop Now</Button>
                    <Box display="flex" flexDirection="row" gap={2} mt={1} mb={2} >
                        <Box>
                            <Typography fontWeight={700} fontSize={"2.5rem"} variant="body1">200+</Typography>
                            <Typography sx={{ color: "#00000060" }} variant="body2">International Brands</Typography>
                        </Box>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Box>
                            <Typography fontWeight={700} fontSize={"2.5rem"} variant="body1">2,000+</Typography>
                            <Typography sx={{ color: "#00000060" }} variant="body2">High-Quality Products</Typography>
                        </Box>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Box>
                            <Typography fontWeight={700} fontSize={"2.5rem"} variant="body1">30,000+</Typography>
                            <Typography sx={{ color: "#00000060" }} variant="body2">Happy Customers</Typography>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
