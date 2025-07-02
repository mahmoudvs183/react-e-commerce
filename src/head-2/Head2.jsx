import { Box, Stack, Typography, Button, InputBase, Container } from "@mui/material";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f0f0f0',

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',

    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export default function Head2() {
    return (
        <Stack sx={{ backgroundColor: "#fff", padding: "10px 0" }}>

            <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
                <Typography sx={{
                    fontWeight: 800, fontSize: "24px", textTransform: "uppercase",
                }} variant="h1">SHOP.CO</Typography>
                <Box >
                    <Button sx={{ color: "#000", }} >
                        Shop
                        <ExpandMoreOutlinedIcon />
                    </Button>
                    <Button sx={{ color: "#000", }}>
                        On Sale
                    </Button>
                    <Button sx={{ color: "#000", }}>
                        New Arrivals
                    </Button>
                    <Button sx={{ color: "#000", }}>
                        Brands
                    </Button>
                </Box>
                <Search sx={{ borderRadius: "20px", flexGrow: 1 }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <LocalGroceryStoreOutlinedIcon />
                    <AccountCircleOutlinedIcon />
                </Box>
            </Container>
        </Stack>

    )
}
