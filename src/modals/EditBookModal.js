import React from 'react';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '70%',
        width:'50%'
    }
};

function EditBookModal({ isVisible }) {


    return (
        <Modal isOpen={true} style={customStyles}>
            <div>
                <h6>My modal!</h6>
                <div>
                    hello there!
                </div>
            </div>

        </Modal>



    )


}

export default EditBookModal;