import React from 'react';

function ModalBottomButtons({ actionText, cancelText, actionMethod, cancelMethod }) {

    const action = () => {
        actionMethod();
    }

    const cancel = () => {
        cancelMethod();
    }

    return (
        <div>
            <button onClick={action} class="custom-width custom-padding left-bottom-button" style={{ width: '50%', justifyContent: 'center', padding: 10, backgroundColor: 'green', color: 'white' }} >
                {actionText}
            </button>
            <button onClick={cancel} class="custom-width custom-padding right-bottom-button" style={{ width: '50%', justifyContent: 'center', padding: 10, backgroundColor: 'red', color: 'white',fontSize:15 }}>
                {cancelText}
            </button>
        </div>
    )
}

export default ModalBottomButtons;