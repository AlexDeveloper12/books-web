import React, { useState } from 'react';

import calls from '../API/calls';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FaBookOpen } from 'react-icons/fa';
import swal from 'sweetalert';
import axios from 'axios';

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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


    const SignUp = () => {

        let errorString = '';

        if (email.length === 0) {
            errorString += 'Please enter an email address\n';
        }

        if (password.length === 0) {
            errorString += 'Please enter a password\n';
        }

        if (errorString === '') {

            //run axios call here and then show swal
            //alert
            // swal({
            //     title: 'Verification',
            //     text: 'Please check your inbox to verify your account!',
            //     icon: 'success'
            // });

        } else {
            swal({
                title: 'Error',
                text: errorString,
                icon: 'error'
            });
        }

    }

    const customOnChange = (eventName, eventValue) => {
        switch (eventName) {
            case 'email':
                setEmail(eventValue);
                break;
            case 'password':
                setPassword(eventValue);
                break;
        }

        console.log(eventValue);
    }

    const SignIn = () =>{

        const headerInfo = {
            'Content-Type':'application/json'
        };

        const myData = JSON.stringify({
            email:email,
            password:password
        });


        axios({
            method:'POST',
            url:calls.signin,
            data:myData,
            headers:headerInfo
        })
        .then(response=>{
            //if success then need to redirect to books home page
            //else show alert
        })
        .catch(error=>{
            console.log('SignIn error: ' + error);
        })
    }


    return (
        <Container component="main" maxWidth="xs">

            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>

                </Avatar> */}

                <FaBookOpen size={50} />


                <Typography component="h1" variant="h5">
                    Sign in
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
                                onChange={(event) => customOnChange('email', event)}
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
                                onChange={(event) => customOnChange('password', event)}
                                type="password"
                            />
                        </Grid>

                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={SignIn}

                        >Sign in</Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    Sign up
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