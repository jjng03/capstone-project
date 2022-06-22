import React from 'react';

function TopRatedModal( {closeModal, currentTopRatedMovie, topRatedTrailer}) {
    return (
        <>
            <div className="modal-background">
                <div className="modal-body">
                    <div className="closeBtn">
                        <button onClick={() => closeModal(false)}> X </button>
                    </div>
                    <div className="modal-box">
                        <h1>{currentTopRatedMovie.original_title}</h1>
                    </div>
                    { 
                    topRatedTrailer && topRatedTrailer.map((topRated) => (
                        (topRated.type === "Trailer" && topRated.name === "Official Trailer") || (topRated.name === "Official HBO Max Trailer") ?
                            <div className="gallery">
                                <iframe
                                src={`https://www.youtube.com/embed/${topRated.key}?autoplay=0&mute=0&showinfo=0&controls=1`}
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
            </div>
        </>
    )
}

export default TopRatedModal;