import logo from './logo.svg';
import './App.css';
import Registration from './registration';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Profile from './profile';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route index element={<Registration/>}/> 
     <Route path='/' element={<Registration/>}/> 
   
     <Route path='/profile' element={<Profile/>}/> 
    </Routes>
    </BrowserRouter>

  );
}

export default App;
