import { Box, Button, Stack, Typography, Container, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from "react";

export default function Products({title}) {
    const [value, setValue] = useState(2.5);
    return (
        <Stack>
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', marginTop: "50px", marginBottom: "30px", fontWeight: "bold", textTransform: "uppercase" }}>
                    {title}
                </Typography>
                 
                <Stack direction="row" gap={2} justifyContent="center" alignItems="center" flexWrap="wrap">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <Button
                            key={item}
                            sx={{
                                padding: 0,
                                border: "none",
                                display: {
                                    xs: index < 1 ? 'block' : 'none',
                                    sm: index < 2 ? 'block' : 'none',
                                    md: index < 3 ? 'block' : 'none',
                                    lg: index < 4 ? 'block' : 'none',
                                }
                            }}
                        >
                            <Card sx={{ width: "270px", border: "none", boxShadow: "none" }}>
                                <CardMedia
                                    sx={{ height: "230px", borderRadius: "20px" }}
                                    image="\image7.png"
                                    title="green iguana"
                                />
                                <CardContent sx={{ display: "flex", alignItems: "start", flexDirection: "column", gap: 1 }}>
                                    <Typography variant="h6" textAlign="start" fontSize="15px" fontWeight={600}>
                                        T-shirt with Tap Details
                                    </Typography>
                                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                        <Rating
                                            name="text-feedback"
                                            value={value}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.60 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2, fontWeight: "500", fontSize: "15px" }}>3.5/5</Box>
                                    </Box>
                                    <Typography variant="body2" color="#000" fontSize="16px" fontWeight={700} textAlign="start">
                                        $ 49.99
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Button>
                    ))}
                </Stack>
                <Button variant="outlined" sx={{ margin: '20px auto', display: 'block', padding: "10px 64px", borderRadius: "62px", color: "#000", borderColor: "#000", textTransform: "capitalize" }}>
                    view all
                </Button>
            </Container>
        </Stack>
    )
}
