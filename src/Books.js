import React, { useState } from 'react';
import axios from 'axios';
import calls from '../src/API/calls';


function Books() {

    const [book, setBooks] = useState([]);


    const GetBooks = () => {

        //will need to get jwt from cookie or storage

        axios({
            method: 'GET',
            url: calls.books,
        })
            .then(response => {
                setBooks(response.data.message[0][0]);
            })
            .catch(error=>{
                console.log('GetBooks error: ' + error);
            })
    }

    return (
        <div>
            User books page

        </div>
    )



}

export default Books;