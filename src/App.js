
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav.js'
function App() {

  return (
    <div className="App">
      {/* navbar */}
      <Nav />
      <Banner />
      <div className='row_background'>
      <Row title="NETFLIX ORIGINALS"  fetchurl={requests.fetchNetflix0riginals} isposter= {true} />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} isposter= {false}/>
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} isposter= {false} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} isposter= {false} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} isposter= {false} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} isposter= {false} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} isposter= {false} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} isposter= {false} />
      </div>
      
      
    </div>
  );
}

export default App;
