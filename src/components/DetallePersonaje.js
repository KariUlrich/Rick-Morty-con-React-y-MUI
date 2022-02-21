import {useEffect, useState } from "react"
import{useParams} from "react-router-dom"
import TarjetaDetalle from "./TarjetaDetalle";
import Box from '@mui/material/Box';

const DetallePersonaje = () => {

    const params = useParams()
    const [personaje, setPersonaje] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
        .then((res) => res.json())
        .then((data => {
           setPersonaje(data)
        }))
       
    }, [params.idPersonaje])
    

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <TarjetaDetalle key={personaje.id}
        imagen= {personaje.image}
        nombre= {personaje.name}
        especie= {personaje.species}
        estado= {personaje.status}  
        locacion= {personaje?.location?.name}
        origen= {personaje?.origin?.name}
       />
       </Box>
    )
}

export default DetallePersonaje