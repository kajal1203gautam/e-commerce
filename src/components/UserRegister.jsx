import React from 'react'
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import {Card, CardContent, Grid,Button } from '@mui/material';
import { Container, padding, textAlign } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';


const UserRegister = ({setIsLogin,isLogin}) => {

const [user, setUser] = useState({ name:"", email:"", mobile:"", password:""})

const handleUserForm= (e)=>{
  setUser({...user, [e.target.name]: e.target.value})
  console.log(user)
}

const handleSubmit = async ()=>{
  const response =  await axios.post('https://api.webprotec.org/api/register',user);
  console.log({response})

}


  return (
    <>
      <Container maxWidth="lg" style={{position:"relative",height:"100vh"}}>
      <Card sx={{ maxWidth: 400 }} style={{position:"absolute", top:"50%",left:"50%", transform:"translate(-50%,-50%)"}}>
    
        <CardContent>
        <Typography gutterBottom variant="h4" component="div" style={{textAlign:"center"}}>
          Resigter
        </Typography>
        <Typography gutterBottom variant="p" component="div" style={{textAlign:"center"}}>
          Kindly Fill this Form
        </Typography>
        <Grid container spacing={3}>
            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <TextField type="Name" onChange={handleUserForm}   value={user.name} label="Name" name="name" variant="outlined"  fullWidth /> 
            </Grid>
            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <TextField  type="email"   onChange={handleUserForm} value={user.email} label="Email" name="email" variant="outlined" fullWidth /> 
            </Grid>
            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <TextField  label="Mobile"   onChange={handleUserForm} value={user.mobile} type="number" name="mobile" variant="outlined" fullWidth /> 
            </Grid>
            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <TextField  label="Password" type="Password"   onChange={handleUserForm} value={user.password} name="password" variant="outlined" fullWidth /> 
            </Grid>
            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
            <div style={{textAlign:"center"}}>
            <Button variant="contained" color="success"  onClick={handleSubmit} style={{textAlign:"center"}}>Register</Button>
            </div>
            <div style={{textAlign:"center", marginTop: "20px"}}>
            <Button  onClick={()=>setIsLogin(!isLogin)} variant="contained" color="success" style={{textAlign: "center" ,backgroundColor: "#2e7d32", color: "#fff" , padding: "10px", textDecoration: "none", borderRadius: "3px"}}>Login</Button>
            </div>
            </Grid>
           
        </Grid>
        </CardContent>
       </Card>
      </Container>
    </>
  )
}

export default UserRegister