import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';




const Busqueda = ({ verInput, hacerBusqueda }) => {

    return(
       <div>
         <Paper sx={{ m: 2, p: 3, width: 400 }}>
            <InputBase
              onChange={verInput}
              sx={{ ml: 1, width: 340, flex: 1 }}
              placeholder="Busqueda por nombre"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton
             onClick={hacerBusqueda}
             type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>
         </Paper>
       </div>
    )
}

export default Busqueda