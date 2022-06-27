import React from 'react';
// import ReactDOM from 'react-dom';

function GenreModal({closeModal}) {
    // const []
    return (
        <div className="genre-background">
            <div className="genre-body">
                <div className="closeBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default GenreModal;
