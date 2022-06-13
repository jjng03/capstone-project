import React from 'react';

function PopularModal( {closeModal, currentPopularMovie, popularTrailer, popularCasts, popularCrews}) {
    return (
        <>
            <div className="modal-background">
                <div className="modal-body">
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
                <div className="description">
                    <p>{currentPopularMovie.overview}</p>
                </div>
                {/* <p>Cast: </p> */}
                <div className="cast">
                    <p>Cast:</p>
                    {
                        popularCasts && popularCasts.map((popularCast) => (
                            // cast.order === 0 || cast.order === 1 || cast.order === 2 ?
                            popularCast.known_for_department === "Acting" && popularCast.order === 0 || popularCast.order === 1 || popularCast.order === 2 ?
                                <p className="actor-name">{popularCast.name},</p>
                            : null
                    ))
                    }
                    
                </div>
                <div className="director">
                    <p>Director:</p>
                    {
                        popularCrews && popularCrews.map((popularCrew) => (
                            popularCrew.job === "Director" ?
                                <p className="director-name">{popularCrew.name}</p>
                            : null
                        ))
                    }
                </div>
                </div>
            </div>
        </>
    )
}

export default PopularModal;