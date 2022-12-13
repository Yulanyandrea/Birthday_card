import { Route, Routes} from 'react-router-dom';
import './App.css';
import Elmar from './Pages/Elmar';
import Pictures from './Pages/pictures/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Elmar />} />
        <Route path='/pictures' element={<Pictures />} />
      </Routes>
    </div>
  );
}

export default App;
