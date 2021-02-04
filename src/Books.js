import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calls from '../src/API/calls';
import GridList from '@material-ui/core/GridList';

function Books() {

    const [book, setBooks] = useState([]);

    useEffect(()=>{
        GetBooks();
    },[]);


    const GetBooks = () => {

        //will need to get jwt from cookie or storage
        const token = localStorage.getItem('token');
        const headerInfo = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        axios({
            method: 'GET',
            url: calls.books,
            headers:headerInfo
        })
            .then(response => {
                setBooks(response.data.message[0]);

            })
            .catch(error => {
                console.log('GetBooks error: ' + error);
            })
    }

    return (
        <div>

            {book.map(function(item,index){
                return <span>{item.Title}</span>
            })}

        </div>
    )



}

export default Books;