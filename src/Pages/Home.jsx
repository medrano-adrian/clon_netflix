import Nav from '../Components/Nav';
// import Profiles from './Profiles'
import Rows from '../Components/Rows';
import Footer from '../Components/Footer'
import requests from '../features/Requests';

import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      {/* <Profiles /> Solo para ver por el momento si se ve este componente */}
      <Nav />
      {/* <Banner /> */}
      <Rows title='NETFLIX' fetchUrl={requests.fetchNetflixOriginals} />
      <Rows title='AMAZON PRIME' fetchUrl={requests.fetchAmazonPrimeOriginals} />
      <Rows title='ACCIÓN' fetchUrl={requests.fetchActionMovies} />
      <Rows title='CRIMEN' fetchUrl={requests.fetchCrimeMovies} />
      <Rows title='COMEDIA' fetchUrl={requests.fetchComedyMovies} />
      <Rows title='TERROR' fetchUrl={requests.fetchHorrorMovies} />
      <Rows title='ROMANCE' fetchUrl={requests.fetchRomanceMovies} />
      <Rows title='DOCUMENTALES' fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </div>
  )
}

export default Home