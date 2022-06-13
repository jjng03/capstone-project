import React from 'react';

function UpcomingModal( {closeModal, currentUpcomingMovie, upcomingTrailer, upcomingCasts, upcomingCrews}) {
    return (
        <>
            <div className="modal-background">
                <div className="modal-body">
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
                                src={`https://www.youtube.com/embed/${upcoming.key}?autoplay=0&mute=0&showinfo=0&controls=1`}
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
                        <p>{currentUpcomingMovie.overview}</p>
                    </div>
                    {/* <p>Cast: </p> */}
                    <div className="cast">
                        <p>Cast:</p>
                        {
                            upcomingCasts && upcomingCasts.map((upcomingCast) => (
                                // cast.order === 0 || cast.order === 1 || cast.order === 2 ?
                                upcomingCast.known_for_department === "Acting" && upcomingCast.order === 0 || upcomingCast.order === 1 || upcomingCast.order === 2 ?
                                    <p className="actor-name">{upcomingCast.name},</p>
                                : null
                        ))
                        }
                        
                    </div>
                    <div className="director">
                        <p>Director:</p>
                        {
                            upcomingCrews && upcomingCrews.map((upcomingCrew) => (
                                upcomingCrew.job === "Director" ?
                                    <p className="director-name">{upcomingCrew.name}</p>
                                : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingModal;