import './App.css';
import DateContainer from './Components/DateContainer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='date-container'>
        <DateContainer />
      </div>
    </div>
  );
}

export default App;
