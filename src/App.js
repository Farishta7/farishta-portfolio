import './App.css';
import Nav from './components/Nav';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education  />}/>
        <Route path='/skills' element={<Skills  />}/>
        <Route path='/interests' element={<Interests />} />
       
      </Routes>
    </div>
  );
}

export default App;
