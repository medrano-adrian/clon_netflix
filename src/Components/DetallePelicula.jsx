import '../styles/Detalle.css';
import axios from '../features/axios';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const DetallePelicula = ({fetchUrl}) => {
  console.log(fetchUrl)
  const [movie, setMovie] = useState(null);
  const urlBase = 'https://image.tmdb.org/t/p/original/';
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovie(request.data);
        return request
      } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
      }
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div>
      {movie ? (
      <>
        <h1 className='detail_title'>{movie.title}</h1>

        <div className='details_container'>

          <section className='img_container'>
              <img className='detail_img' src={`${urlBase}${movie.poster_path}`} alt={movie.name} />
          </section>

          <section className='info_container'>
            <p>Sinopsis: {movie.overview}</p>
            <p>Genero: {
              movie.genres.map((genre, index, array) => (
                <span key={genre.id}>
                  {genre.name}
                  {index !== array.length - 1 && ", "}
                </span>
              ))
            }
            </p>
            <p>Productoras: {
              movie.production_companies.map((company, index, array) => (
                <span key={company.id}>
                  {company.name}
                  {index !== array.length - 1 && ", "}
                </span>
              ))
            }
            </p>
          </section>

        </div>
      </>
    ) : (
      <div><h1>Cargando...</h1></div>
    )}
    </div>
  );
}

export default DetallePelicula;
