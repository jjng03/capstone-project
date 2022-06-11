import React from 'react';

function TopRatedModal( {closeModal, currentTopRatedMovie, topRatedTrailer}) {
    return (
        <>
            {/* {(currentMovie.original_title) ? */}
            <div className="modal-background">
                <div className="closeBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modal-box">
                    <h1>{currentTopRatedMovie.original_title}</h1>
                </div>
                { 
                topRatedTrailer && topRatedTrailer.map((topRated) => (
                    topRated.type === "Trailer"  ?
                        <div className="gallery">
                            <iframe
                            src={`https://www.youtube.com/embed/${topRated.key}?autoplay=0&mute=1&showinfo=0&controls=0`}
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

export default TopRatedModal;