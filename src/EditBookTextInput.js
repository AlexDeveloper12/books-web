import React from 'react';
import TextField from '@material-ui/core/TextField';

function EditBookTextInput({ placeholder, title, description, author, pagination, publisher, image, isbnShort, isbnLong,isAutoFocus }) {

    return (
        <div>
            <TextField
                placeholder={placeholder}
                autoFocus={isAutoFocus?true:false}
            
            />

        </div>
    )


}

export default EditBookTextInput;