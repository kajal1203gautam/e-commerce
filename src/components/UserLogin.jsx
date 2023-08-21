import React from 'react'
import TextField from '@mui/material/TextField';
import { Card, CardContent, Grid,Button } from '@mui/material';
import { Container, padding, textAlign } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const UserLogin = ({setIsLogin,isLogin}) => {

  

    return (
        <>
            <Container maxWidth="lg" style={{ position: "relative", height: "100vh" }}>
                <Card sx={{ maxWidth: 400 }} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>

                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" style={{ textAlign: "center" }}>
                            Login
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <TextField type="email" label="email" name="email" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <TextField label="password" type="password" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <div style={{ textAlign: "center" }}>
                                    <Button variant="contained" color="success" style={{ textAlign: "center" }}>Login</Button>
                                </div>
                                <div style={{ textAlign: "center", marginTop: "20px" }}>
                                <Button onClick={()=>setIsLogin(!isLogin)} variant="contained" color="success" style={{ textAlign: "center" }}>Register</Button>
                                </div>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default UserLogin