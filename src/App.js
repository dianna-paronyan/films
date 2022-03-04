import './App.css';
import FetchData from './FetchData';



function App() {

  return (
    <div className="App">
      <h1 className='heading'>Films</h1>
      <FetchData id={1}/>
    </div>
  );
}

export default App;
