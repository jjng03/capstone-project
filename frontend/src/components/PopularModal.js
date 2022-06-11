import React from 'react';

function PopularModal( {closeModal, currentPopularMovie, popularTrailer, randomMovie}) {
    return (
        <>
            {/* {(currentMovie.original_title) ? */}
            <div className="modal-background">
                <div className="closeBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modal-box">
                    <h1>{currentPopularMovie.original_title}</h1>
                </div>
                { 
                popularTrailer && popularTrailer.map((popular) => (
                    popular.type === "Trailer" && popular.name === "Official Trailer" || popular.name === "Official HBO Max Trailer" ?
                        <div className="gallery">
                            <iframe
                            src={`https://www.youtube.com/embed/${popular.key}?autoplay=0&mute=0&showinfo=0&controls=1`}
                            className="video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            title="video"
                            />
                        </div>
                : null 
            ))
            }
            </div>
            {/* : closeModal(false)} */}
        </>
    )
}

export default PopularModal;