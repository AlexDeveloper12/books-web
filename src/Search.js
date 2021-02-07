import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import HorizontalNavigator from './HorizontalNavigator';


function Search() {

    const [query, setQuery] = useState('');

    const SearchGoogleBooks = () => {
        //inside here call the api and use the query in state
    }

    const GoogleBookOutput = () => {
        return (
            <div>
                <h6></h6>
            </div>
        )
    }

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <TextField
                    value={query}
                    placeholder='Search book...'
                    autoFocus
                    onChange={SearchGoogleBooks}

                />
            </div>

        </div>
    )

}

export default Search;