import {useEffect, useState } from "react"
import{useParams} from "react-router-dom"
import TarjetaDetalle from "./TarjetaDetalle";

const DetallePersonaje = () => {

    const params = useParams()
    const [personaje, setPersonaje] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
        .then((res) => res.json())
        .then((data => {
           setPersonaje(data)
        }))
       
    }, [])
    

    return (
        <TarjetaDetalle key={personaje.id}
        imagen= {personaje.image}
        nombre= {personaje.name}
        especie= {personaje.species}
        estado= {personaje.status}  
        origen= {personaje.url}
       />
    )
}

export default DetallePersonaje