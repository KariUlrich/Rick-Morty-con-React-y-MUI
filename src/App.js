
import './App.css';
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Principal from "./components/Principal"
import Locations from "./components/Locations"
import Episodes from "./components/Episodes"
import DetallePersonaje from "./components/DetallePersonaje"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';



const App = () => {

  return(
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element = {<Principal />}/>
      <Route path="/personajes/:idPersonaje" element={<DetallePersonaje />}/>
      <Route path="/locations" element = {<Locations />}/>
      <Route path="/episodes" element = {<Episodes />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
