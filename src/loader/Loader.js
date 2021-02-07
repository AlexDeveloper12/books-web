import React from 'react';
import ReactLoading from 'react-loading';


const Loader = ({animating}) =>{
    return(
        <ReactLoading type='bubbles' width={'20%'} height={'20%'}/>
    )
}

export default Loader;