import React, { useEffect } from 'react';
import HorizontalNavigator from './HorizontalNavigator';
import axios from 'axios';

function Profile() {

    const token = localStorage.getItem('token');
    const headerInfo = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const GetProfileInfo = () => {
        axios({
            method: 'GET',
            headers: headerInfo
        })
            .then(response => {

            })
            .catch(error => {
                console.log('GetProfileInfo error: ' + error);
            })
    }

    useEffect(() => {
        GetProfileInfo();
    }, []);


    return (
        <div>
            <h6>Profile</h6>
        </div>
    )
}

export default Profile;