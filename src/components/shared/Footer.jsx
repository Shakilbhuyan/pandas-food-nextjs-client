import { Box, Button, Container, IconButton, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import AdbIcon from '@mui/icons-material/Adb';


const Footer = () => {
    return (
        <Box className="bg-black px-2 py-10"  >
           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
            }}
          >
            PANDASFOOD
          </Typography>
            <Container>
            <Box sx={{"& svg": {
            color: "white"
          }}} className="w-full text-center">
        <IconButton>
                <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton>
            <TwitterIcon></TwitterIcon>
          </IconButton>
          </Box>
          <Typography variant="body2" textAlign="center" color = "gray">
            @2024 CopyRight 
          </Typography>
            </Container>
        </Box>
    );
};

export default Footer;