import { useState, useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import axios from "../features/axios";
import requests from "../features/Requests";
import '../styles/Banner.css';

const Banner = () => {

    const [movie, setMovie] = useState ([]);

    useEffect (() => {
        async function fetchData () {
            const request = await axios.get (requests.fetchAnimationMovies);
            setMovie (
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // console.log(movie);

    const recortar = (texto, n) => {
        return (texto.length > n) ? texto.substr (0, n - 1) + '...' : texto;
    }

    const urlBase = 'https://image.tmdb.org/t/p/original/';

    return (
        <header className="banner"
            style={{
                backgroundImage: `url(${urlBase}${movie.backdrop_path})`
            }}>  
            <div className="banner_contents">
                
                <h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>
                
                <div className="banner_buttons">
                    <button className="banner_but"><FontAwesomeIcon icon={faPlay} /> Play</button>
                    <button className="banner_but"><FontAwesomeIcon icon={faPlus} /> Mi lista</button>
                </div>
                
                <h2 className="banner_description"> {recortar (`${movie.overview}`, 150)}
                </h2>
            </div>
        </header>
    )
}

export default Banner;