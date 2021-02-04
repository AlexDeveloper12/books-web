import React from 'react';

import Modal from 'react-modal';

function EditBookModal({isVisible}){


    return(
        <Modal isOpen={isVisible}>
            <h6>My modal!</h6>
        </Modal>



    )


}

export default EditBookModal;