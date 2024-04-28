import { useParams } from 'react-router-dom';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import DetallePelicula from "../Components/DetallePelicula";
import requests from '../features/Requests';
import '../styles/Detalle.css'

const Descripcion = () => {
    const { id } = useParams();
    return (
        <div>
            <Nav/>
            <DetallePelicula fetchUrl={requests.fetchMovieDetailsById(id)}/>
            <Footer/>
        </div>
    )
}

export default Descripcion;
