import React from 'react';

function Modal( {closeModal, currentMovie, randomMovie}) {
    return (
        <>
            {/* {(currentMovie.original_title) ? */}
            <div className="modal-background">
                <div className="closeBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modal-box">
                    <h1>{currentMovie.original_title}</h1>
                </div>
                <div className="trailer">
                    <iframe
                    src={`https://www.youtube.com/embed/${randomMovie.key}?autoplay=0&mute=0&showinfo=0&controls=1`}
                    className="modal-video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    title="video"
                    />
                </div>
            </div>
            {/* : closeModal(false)} */}
        </>
    )
}

export default Modal;