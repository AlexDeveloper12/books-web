import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ClipLoader from 'react-spinners/ClipLoader';

import TextField from '@material-ui/core/TextField';


import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FaBookOpen } from 'react-icons/fa';
import swal from 'sweetalert';
import axios from 'axios';

import calls from './API/calls';


function Signup({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableEmail, setDisableEmail] = useState(false);
    const [disablePassword, setDisablePassword] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [loader, setLoader] = useState(false);

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


    const SignInUser = () => {



        let errorString = '';

        const myData = JSON.stringify({
            email: email,
            password: password
        });

        const headerInfo = {
            'Content-Type': 'application/json'
        };

        if (email.length === 0) {
            errorString += 'Please enter an email address\n';
        }

        if (password.length === 0) {
            errorString += 'Please enter a password\n';
        }

        if (errorString === '') {

            setDisableEmail(true);
            setDisablePassword(true);
            setDisableButton(true);
            setLoader(true);

            axios({
                method: 'POST',
                url: calls.signin,
                data: myData,
                headers: headerInfo
            })
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        //here i will need to set jwt and refresh token then redirect

                        setDisableEmail(false);
                        setDisablePassword(false);
                        setDisableButton(false);
                        setLoader(false);
                        localStorage.setItem('token', response.data.message.token);
                        localStorage.setItem('refreshToken', response.data.message.refreshToken);
                        //history.push('/books');

                    }
                })
                .catch(error => {
                    console.log('SignIn error: ' + error);
                });

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
                setEmail(eventValue.target.value);
                break;
            case 'password':
                setPassword(eventValue.target.value);
                break;
        }

        console.log(eventValue);
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
                                type="email"
                                onChange={(event) => customOnChange('email', event)}
                                disabled={disableEmail}
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
                                disabled={disablePassword}

                            />
                        </Grid>

                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={SignInUser}
                            disabled={disableButton}

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

            <ClipLoader loading={loader} size={30}/>



        </Container>
    )


}

export default Signup;