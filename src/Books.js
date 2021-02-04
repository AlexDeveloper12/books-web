import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calls from '../src/API/calls';
import { FaPen } from 'react-icons/fa';
import EditBookModal from './modals/EditBookModal';


import HorizontalNavigator from './HorizontalNavigator';

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
            <div>
                <HorizontalNavigator/> 
            </div>

            {book.map(function (item, index) {
                return (
                    <div key={item.BookID}>
                        <span style={{ textAlign: 'center' }}>{item.Title}</span>
                        <FaPen size={20} onClick={ToggleModal} />
                        <img src={item.Image} width={300} height={250} />
                    </div>
                )
            })}

            <div>
                <EditBookModal
                    isVisible={editModal}
                />
            </div>



        </div>
    )



}

export default Books;