import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const TarjetaDetalle = ({imagen, nombre, especie, estado, locacion, origen}) => {

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
             Species: {especie}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             Status: {estado}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             Location: {locacion}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             Origin: {origen}
             </Typography>
            </CardContent>
            </Card>
        </div>
    )

}

export default TarjetaDetalle