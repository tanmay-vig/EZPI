
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import Login from './Components/login_d'
import SignUp from './Components/SignUp'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  );
}

export default App;
