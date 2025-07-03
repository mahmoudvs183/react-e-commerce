import { Box, Container } from "@mui/material";

export default function Brands() {
    return (
        <Box sx={{ backgroundColor: '#000', padding: '14px 0' }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: "#fff", fontSize: "22px", textTransform: "uppercase" }}>
                <Box sx={{ fontWeight: "600" }}>versace</Box>
                <Box sx={{ fontWeight: "800" }}>zara</Box>
                <Box sx={{ fontWeight: "500" }}>gucci</Box>
                <Box sx={{ fontWeight: "900" }}>prada</Box>
                <Box sx={{ fontWeight: "400" }}>calvin klein</Box>
            </Container>
        </Box>
    )
}
