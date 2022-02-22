import {useEffect, useState } from "react"
import TarjetaEpisodio from "./TarjetaEpisodio";
import Box from '@mui/material/Box';


const Episodes = () => {

    const [episodios, setEpisodios] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
        .then((res) => res.json())
        .then((data => {
           setEpisodios(data.results)
        }))
       
    }, [])


    return(
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                 {episodios.map((episodio) => (
                    <TarjetaEpisodio key={episodio.id}
                     nombre= {episodio.name}
                     fecha= {episodio.air_date}
                    />
                 ))}
                 </Box>
        </div>
    )
}

export default Episodes