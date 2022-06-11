import React from 'react';

function UpcomingModal( {closeModal, currentUpcomingMovie, upcomingTrailer, randomMovie}) {
    return (
        <>
            {/* {(currentMovie.original_title) ? */}
            <div className="modal-background">
                <div className="closeBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modal-box">
                    <h1>{currentUpcomingMovie.original_title}</h1>
                </div>
                { 
                upcomingTrailer && upcomingTrailer.map((upcoming) => (
                    upcoming.type === "Trailer" && upcoming.name === "Official Trailer" || upcoming.name === "Official HBO Max Trailer" ?
                        <div className="gallery">
                            <iframe
                            src={`https://www.youtube.com/embed/${upcoming.key}?autoplay=1&mute=1&showinfo=0&controls=0`}
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

export default UpcomingModal;