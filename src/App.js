import './App.css';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="App">
    <div style={{margin: '20% 30%'}}>
      <button className='btn'>hover over me! k
      <Tooltip position='right' />
      </button>
      </div>
    </div>
  );
}

export default App;
