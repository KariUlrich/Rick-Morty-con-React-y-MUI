
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Nav = () => {

    return(
        <div>

           <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ mb: 3, p: 2, bgcolor: 'success.main' }}>
             <Toolbar>
             <Typography variant="h2" component="h1" sx={{ color: 'text.primary', flexGrow: 1 }}>
               Rick & Morty
             </Typography>
             <Button variant="contained" sx={{ borderRadius: 16, fontSize: 18, p: 2, m: 2, bgcolor: 'text.primary' }}><Link to="/"> Character</Link></Button>
             <Button variant="contained" sx={{ borderRadius: 16, fontSize: 18, p: 2, m: 2, bgcolor: 'text.primary' }}><Link to="/locations">Locations</Link></Button>
             <Button variant="contained" sx={{ borderRadius: 16, fontSize: 18, p: 2, m: 2, bgcolor: 'text.primary' }}><Link to="/episodes">Episodes</Link></Button>
             </Toolbar>
            </AppBar>
          </Box>

        </div>
    )
}

export default Nav