import {useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Locations = () => {

    const [locaciones, setLocaciones] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
        .then((res) => res.json())
        .then((data => {
           setLocaciones(data.results)
        }))
       
    }, [])


    return(
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                 {locaciones.map((location) => (
                 <Card key={location.id} sx={{m: 3, width: 300 }} >
                 <CardMedia
                  component="img"
                  height="200"
                  image= {"https://imagenes.elpais.com/resizer/tLofFlByYmVW1PietKZS6MIsigs=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/MUZ3WHYIHCKK3EK5Q6DFGFQE3A.jpg"}
                  alt="imagen personaje"
                  />
                 <CardContent>
                 <Typography gutterBottom variant="h5" component="h5">
                  {location.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {location.type}
                </Typography>
                </CardContent>
                </Card>
                 ))}
                 </Box>
        </div>
    )
}

export default Locations
