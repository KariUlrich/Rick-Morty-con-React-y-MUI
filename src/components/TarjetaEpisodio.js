import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const TarjetaEpisodio = ({nombre, fecha,}) => {

    return(
        <div>
            <Card  sx={{m: 3, width: 300 }}>
             <CardMedia
              component="img"
              height="200"
              image= {"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-1604562846.jpg?crop=1.00xw:0.954xh;0,0.0248xh&resize=1200:*"}
              alt="imagen personaje"
             />
            <CardContent>
             <Typography gutterBottom variant="h5" component="h5">
              {nombre}
             </Typography>
             <Typography variant="body2" color="text.secondary">
              {fecha}
             </Typography>
            </CardContent>
            </Card>
        </div>
    )

}

export default TarjetaEpisodio