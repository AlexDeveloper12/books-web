import React from 'react';

import Modal from 'react-modal';
import ModalBottomButtons from '../ModalBottomButtons';
import EditBookTextInput from '../EditBookTextInput';

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

function EditBookModal({ isVisible,cancel,action,title,description }) {

    return (
        <Modal isOpen={isVisible} style={customStyles} onRequestClose={cancel} >
            <div>
                <EditBookTextInput
                    placeholder='Title'
                    isAutoFocus={true}
                    />
                 <EditBookTextInput
                    placeholder='Description'
                    isAutoFocus={false}
                    />
                 <EditBookTextInput
                    placeholder='Pagination'
                    isAutoFocus={false}
                    />
                     <EditBookTextInput
                    placeholder='author'
                    isAutoFocus={false}
                    />
                     <EditBookTextInput
                    placeholder='Publisher'
                    isAutoFocus={false}
                    />
                     <EditBookTextInput
                    placeholder='ISBN (10)'
                    isAutoFocus={false}
                    />
                     <EditBookTextInput
                    placeholder='ISBN (13)'
                    isAutoFocus={false}
                    />

                <div>
                    <ModalBottomButtons
                        actionText='Update'
                        cancelText='Cancel'
                        cancelMethod={cancel}
                        actionMethod={action}
                    />
                </div>
            </div>

        </Modal>



    )


}

export default EditBookModal;