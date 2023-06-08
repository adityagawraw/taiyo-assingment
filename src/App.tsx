
import {Routes , Route} from "react-router-dom";
import './App.css';
import Contacts from './pages/Contacts/Contacts';
import ChartsNMaps from './pages/ChartsAndMaps/ChartsNMaps';

function App() {
  return (
    <div className="App">
     <Routes>
<Route path='/' element={<Contacts/>}/>
<Route path='/charts' element={<ChartsNMaps/>}/>
     </Routes>
    </div>
  );
}

export default App;
