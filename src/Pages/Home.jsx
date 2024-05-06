import Nav from '../Components/Nav';
import Banner from '../Components/Banner';
import Rows from '../Components/Rows';
import Footer from '../Components/Footer'
import requests from '../features/Requests';

const Home = () => {
  return (
    <div className='home'>
      <Nav/>
      <Banner/>
      {/* <Rows title='NETFLIX' fetchUrl={requests.fetchNetflixOriginals} />
      <Rows title='AMAZON PRIME' fetchUrl={requests.fetchAmazonPrimeOriginals} /> */}
      <Rows title='ACCIÓN' fetchUrl={requests.fetchActionMovies} />
      <Rows title='CRIMEN' fetchUrl={requests.fetchCrimeMovies} />
      <Rows title='COMEDIA' fetchUrl={requests.fetchComedyMovies} />
      <Rows title='AVENTURA' fetchUrl={requests.fetchAdventureMovies} />
      <Rows title='ANIMACIÓN' fetchUrl={requests.fetchAnimationMovies} />
      <Rows title='DRAMA' fetchUrl={requests.fetchDramaMovies} />
      <Rows title='CIENCIA FICCIÓN' fetchUrl={requests.fetchScienceFictionMovies} />
      <Rows title='TERROR' fetchUrl={requests.fetchHorrorMovies} />
      <Rows title='ROMANCE' fetchUrl={requests.fetchRomanceMovies} />
      <Rows title='DOCUMENTALES' fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </div>
  )
}

export default Home