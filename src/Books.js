import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calls from '../src/API/calls';
import { FaPen } from 'react-icons/fa';
import EditBookModal from './modals/EditBookModal';
import HorizontalNavigator from './HorizontalNavigator';
import Book from './Book';

function Books() {

    const [book, setBooks] = useState([]);
    const [editModal, setEditModal] = useState(false);

    useEffect(() => {
        GetBooks();
    }, []);


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
            headers: headerInfo
        })
            .then(response => {

                console.log(response.data.message[0]);
                console.log(typeof (response.data.message[0]));
                setBooks(response.data.message[0]);

            })
            .catch(error => {
                console.log('GetBooks error: ' + error);
            })
    }

    const ToggleModal = () => {
        setEditModal(!setEditModal);
    }



    return (
        <div>

            {book.map(function (item, index) {
                return (
                    // <Book Title={item.Title} ToggleModal={ToggleModal} BookID={item.BookID} />
                    <div key={item.BookID} style={{ display: 'inline-block', width: '30%',margin:'1%' }} class="user-book" onClick={ToggleModal} >
                        <img src={item.Image} width={300} height={250} class="book-image"  />
                        <p class="book-title">{item.Title}</p>
                    </div>
                )
            })}

            <div>
                <EditBookModal
                    isVisible={editModal}
                    cancel={ToggleModal}
                />
            </div>



        </div>
    )



}

export default Books;