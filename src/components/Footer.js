import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    return(
        <div>
          <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3, bgcolor: 'success.main' }}>
          <Typography gutterBottom variant="h4" component="h4" sx={{ color: 'text.primary', fontSize: 25 }}>
              Hecho por: <spam className="nombre">Kari Ulrich</spam>
              <IconButton aria-label="links redes sociales" >
              <FacebookIcon sx={{ mr: 1, color: 'text.primary', fontSize: 50 }}/>
              <InstagramIcon sx={{ mr: 1, color: 'text.primary', fontSize: 50 }}/>
              <LinkedInIcon sx={{ mr: 1, color: 'text.primary', fontSize: 50 }}/>
              <GitHubIcon sx={{ color: 'text.primary', fontSize: 50 }}/>
              </IconButton>
             </Typography>
          </Box>
        </div>
    )
}

export default Footer