import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UserList from './pages/UserList';



function App() {
  return (
   
   <Routes>
    
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
     <Route path='/userlist' element={<UserList/>}/>
   </Routes>
  );
}

export default App;
