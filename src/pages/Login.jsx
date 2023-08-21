import React,{useState} from 'react'
import UserLogin from '../components/UserLogin'
import UserRegister from '../components/UserRegister'
import TextField from '@mui/material/TextField';
import { Card, CardContent, Grid,Button } from '@mui/material';
import { Container, padding, textAlign } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <>
    { isLogin ? <UserLogin  isLogin={isLogin} setIsLogin={setIsLogin} /> : <UserRegister isLogin={isLogin} setIsLogin={setIsLogin} />}

    </>
  )
}

export default Login