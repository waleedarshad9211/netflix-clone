import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Hello there We are creating a netflix clone today!</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
