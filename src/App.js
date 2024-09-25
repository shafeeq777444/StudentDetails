
import './App.css';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Home from './Component/Home';
import Create from './Component/Create';
import { ProviderContext } from './context/CreateContext';
import Display from './Component/Display';


function App() {

  return (
    <div className="App">
       <ProviderContext>
         <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/:id' element={<Display/>}/>
          </Routes>
         </Router>
         </ProviderContext>
          
     
      
    </div>
  );
}

export default App;
