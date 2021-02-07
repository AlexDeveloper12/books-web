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
            <button onClick={action} class="custom-width custom-padding left-bottom-button" >
                {actionText}
            </button>
            <button onClick={cancel} class="custom-width custom-padding right-bottom-button">
                {cancelText}
            </button>
        </div>
    )


}

export default ModalBottomButtons;