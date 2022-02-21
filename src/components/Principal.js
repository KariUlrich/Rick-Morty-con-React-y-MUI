import { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import Busqueda from "./Busqueda";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const Principal = () => {
    const [personajes,setPersonajes] = useState([])
    const [valorDelInput, setValorDelInput] = useState("")
    const [busqueda, setBusqueda] = useState("")

    const handleChange = (e) => {
     setValorDelInput(e.target.value)
     console.log(valorDelInput)
  }

    const handleClick = () => {
     setBusqueda(valorDelInput)
  }
     
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
        .then((res) => res.json())
        .then((data => {
           setPersonajes(data.results)
           console.log(data.results)
        }))
       
    }, [busqueda])
       

    return(
        <div className="div-busqueda-tarjetas">
               <Box>
               <Busqueda verInput={handleChange} hacerBusqueda={handleClick}/>
               </Box>
               <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                 {personajes.map((personaje) => (
                  <Link to={`/personajes/${personaje.id}`}>
                    <Tarjeta key={personaje.id}
                     imagen= {personaje.image}
                     nombre= {personaje.name}
                     especie= {personaje.species}
                     estado= {personaje.status}
                    />
                  </Link>
                 ))}
                 </Box>
               
        </div>
    )
}

export default Principal

