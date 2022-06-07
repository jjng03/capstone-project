import React from 'react';

function Modal( {closeModal, currentMovie}) {
    return (
        <>
            {/* {(currentMovie.original_title) ? */}
            <div className="modal-background">
                <div className="closeBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modal-box">
                    <h1>Hello</h1>
                </div>
            </div>
            {/* : closeModal(false)} */}
        </>
    )
}

export default Modal;