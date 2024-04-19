const API_KEY='987f644e376d2f2932f34b41f5e0f601'

const requests ={
  fetchTrading:`/trending/movie/week?api_key=${API_KEY}&language=es-ES`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-ES`,
  fetchAmazonPrimeOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=1024&language=es-ES`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests