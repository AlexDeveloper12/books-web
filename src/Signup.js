import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {FaBookOpen} from 'react-icons/fa';

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();


    const SignUp = () =>{

    }

    const customOnChange = (eventName,eventValue) =>{
        switch(eventName){
            case 'email':
                setEmail(eventValue);
                break;
            case 'password':
                setPassword(eventValue);
                break;
            case 'reenterpassword':
                setReEnterPassword(eventValue);
                break;
        }

        console.log(eventValue);
    }


    return (
        <Container component="main" maxWidth="xs">

            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>

                </Avatar> */}

                <FaBookOpen size={50}/>


                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="email"
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                autoFocus
                                onChange={(event)=>customOnChange('email',event)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                autoComplete="password"
                                onChange={(event)=>customOnChange('password',event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="reEnterPassword"
                                label="Re-enter Password"
                                name="reEnterPassword"
                                autoComplete="Re-enter Password"
                                onChange={(event)=>customOnChange('reenterpassword',event)}
                            />
                        </Grid>

                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            >Sign Up</Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>



                    </Grid>
                </form>


            </div>



        </Container>
    )


}

export default Signup;