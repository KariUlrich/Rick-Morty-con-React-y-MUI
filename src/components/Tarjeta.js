import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Tarjeta = ({imagen, nombre, especie, estado}) => {

    return(
        <div>
            <Card  sx={{m: 3, width: 300 }}>
             <CardMedia
              component="img"
              height="300"
              image={imagen}
              alt="imagen personaje"
             />
            <CardContent>
             <Typography gutterBottom variant="h5" component="h5">
              {nombre}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             {especie}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             {estado}
             </Typography>
            </CardContent>
            </Card>
        </div>
    )

}

export default Tarjeta

// sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',