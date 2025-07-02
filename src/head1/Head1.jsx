import { Box, Container, Typography } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


export default function Head1() {
    return (
        <Box className="head1"
            sx={{
                width: "100%",
                backgroundColor: "#000",
            }}>
                
            <Container className="border" sx={{
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                position: "relative",
            }}>
                <Typography sx={{ fontSize: "14px", }} variant="h6">Sign up and get 20% off to your first order. </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "14px", textTransform: "capitalize", textDecoration: "underline" }} variant="h6">sign up now</Typography>
           <CloseOutlinedIcon sx={{ position: "absolute", right: "3%", top: "50%", transform: "translateY(-50%)", color: "#fff" }} />
            </Container>
        </Box>
    )
}
