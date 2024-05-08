import '../styles/Rows.css';
import axios from '../features/axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Rows = ({ title, fetchUrl }) => {
  
  const [movies, setMovies] = useState([]);
  const urlBase = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  const scrollRef = useRef();
  const [scroll, setScroll] = useState(0);

  function handleScroll(moveScroll) {
    const moreScroll = scroll + moveScroll;
    setScroll(moreScroll);
    scrollRef.current.scrollLeft = moreScroll;
  }

  return (
    <div className='rows'>
      <h2 className='rows__title'>{title}</h2>
      <div className='rows__posters' ref={scrollRef}>
        <img className='rows__arrows left' onClick={()=>{handleScroll(-400)}} src="../../public/images/icons8-flecha-izquierda-48.png" alt="Flecha izquierda" />
        {movies.map(movie => (
          <Link to={`/pelicula/${movie.id}`} target="_blank" className='rows__poster' key={movie.id}>
            <img className='rows__poster__img' key={movie.id} src={`${urlBase}${movie.poster_path}`} alt={movie.name} />
          </Link>
        ))}
        <img className='rows__arrows right' onClick={()=>{handleScroll(400)}} src="../../public/images/icons8-flecha-derecha-48.png" alt="Flecha derecha" />
      </div>
    </div>
  )
}

export default Rows