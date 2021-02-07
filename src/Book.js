import React from 'react';
import { FaPen } from 'react-icons/fa';

function Book(BookID,Title,Image,ToggleModal) {

    return (
        <div key={BookID} >
            <FaPen size={20} onClick={ToggleModal} />
            <img src={Image} width={300} height={250} />
        </div>
    )

}

export default Book;