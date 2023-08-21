import React from 'react'
import { Container, Card, CardContent, Grid, Typography, TextField } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const ToDoList = () => {
    return (
        <>
            <Container maxWidth="lg" style={{ position: "relative", height: "100vh" }}>
                <Card sx={{ maxWidth: 400 }} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>

                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" style={{ textAlign: "center" }}>
                            To Do List
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <TextField type="text" label="text" name="text" variant="plain" fullWidth />
                            </Grid>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default ToDoList