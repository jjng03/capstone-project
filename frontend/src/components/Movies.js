import React, {useState, useEffect} from 'react';
import PopularModal from './PopularModal.js';
import UpcomingModal from './UpcomingModal.js';
import TopRatedModal from './TopRatedModal.js';
import { MdChevronLeft, MdChevronRight, MdVolumeMute } from 'react-icons/md';
import Nav from './Nav.js';

// const video = videoPlayer.querySelector('.video');
// const videoPlayer = document.querySelector('.gallery');

function Movies() {
    //===================================================\\
    //===== USE STATE FUNCTIONS ===== \\
    //===================================================\\
    const [currentPopularMovie, setCurrentPopularMovie] = useState([]);
    const [currentUpcomingMovie, setCurrentUpcomingMovie] = useState([]);
    const [currentTopRatedMovie, setCurrentTopRatedMovie] = useState([]);

    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    const [randomMovie, setRandomMovie] = useState([]);
    const [featuredMovie, setFeaturedMovie] = useState(null);

    const [openUpcomingModal, setUpcomingOpenModal] = useState(false);
    const [openPopularModal, setPopularOpenModal] = useState(false);
    const [openTopRatedModal, setTopRatedOpenModal] = useState(false);

    const [popularTrailer, setPopularTrailer] = useState([]);
    const [upcomingTrailer, setUpcomingTrailer] = useState([]);
    const [topRatedTrailer, setTopRatedTrailer] = useState([]);

    const [popularCasts, setPopularCasts] = useState([]);
    const [popularCrews, setPopularCrews] = useState([]);
    
    const [upcomingCasts, setUpcomingCasts] = useState([]);
    const [upcomingCrews, setUpcomingCrews] = useState([]);

    //===================================================\\
    //===== HORIZONTAL SCROLL FUNCTION ===== \\
    //===================================================\\
    function slidePopularLeft() {
        const cards = document.querySelector(".popular-cards");
        cards.scrollLeft = cards.scrollLeft - 1000;
    }

    function slidePopularRight() {
        const cards = document.querySelector(".popular-cards");
        cards.scrollLeft = cards.scrollLeft + 1000;
    }

    function slideTopRatedLeft() {
        const cards = document.querySelector(".toprated-cards");
        cards.scrollLeft = cards.scrollLeft - 1000;
    }

    function slideTopRatedRight() {
        const cards = document.querySelector(".toprated-cards");
        cards.scrollLeft = cards.scrollLeft + 1000;
    }

    function slideUpcomingLeft() {
        const cards = document.querySelector(".upcoming-cards");
        cards.scrollLeft = cards.scrollLeft - 1000;
    }

    function slideUpcomingRight() {
        const cards = document.querySelector(".upcoming-cards");
        cards.scrollLeft = cards.scrollLeft + 1000;
    }
    // function clickMute() {
    //     const mute = videoPlayer.querySelector(".mute");
    //     mute.
    // }
    
    //===================================================\\
    //===== API KEY ===== \\
    //===================================================\\
    const apiKey = "4464b123b33f0570ee7200292fffe1a2"

    //===================================================\\
    //===== POPULAR MOVIES API URL ===== \\
    //===================================================\\
    async function getPopularMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setPopularMovies(data.results)
    }

    useEffect(()=>{
        getPopularMovies();
    }, []);

    //===================================================\\
    //===== UPCOMING MOVIES API URL ===== \\
    //===================================================\\
    async function getUpcomingMovies() {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setUpcomingMovies(data.results)
    }

    useEffect(()=>{
        getUpcomingMovies();
    }, []);

    //===================================================\\
    //===== TOP RATED MOVIES API URL ===== \\
    //===================================================\\
    async function getTopRatedMovies() {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setTopRatedMovies(data.results)
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])

    //===================================================\\
    //===== SELECTING A RANDOM MOVIE FOR GALLERY ===== \\
    //===================================================\\
    useEffect(()=>{
        async function getRandomMovie() {
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
            const response = await fetch(url)
            const data = await response.json()
            const rando = data.results[Math.floor(Math.random() * data.results.length)]
            setRandomMovie(rando)
        }
        getRandomMovie();
    }, [])
    
    
    useEffect(()=>{
        async function getFeaturedMovie() {
            const url = `https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setFeaturedMovie(data.results)
        }
        getFeaturedMovie();
    }, [randomMovie])

    //===================================================\\
    //===== POPULAR MOVIE TRAILERS AND CLICK EVENT ===== \\
    //===================================================\\
    const handleCurrentPopularMovie = (e)=>{
        const findCurrentPopularMovie = popularMovies.find((popularMovie)=>popularMovie.original_title === e.target.alt);
    
        setCurrentPopularMovie(findCurrentPopularMovie)
    }

    useEffect(()=>{
        async function getPopularTrailer() {
            const url = `https://api.themoviedb.org/3/movie/${currentPopularMovie.id}/videos?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setPopularTrailer(data.results)
        }
        getPopularTrailer();
    }, [currentPopularMovie])

    //===================================================\\
    //===== UPCOMING MOVIE TRAILERS AND CLICK EVENT ===== \\
    //===================================================\\
    const handleCurrentUpcomingMovie = (e)=>{
        const findCurrentUpcomingMovie = upcomingMovies.find((upcomingMovie)=>upcomingMovie.original_title === e.target.alt);
        
        setCurrentUpcomingMovie(findCurrentUpcomingMovie)
    }

    useEffect(()=>{
        async function getUpcomingTrailer() {
            const url = `https://api.themoviedb.org/3/movie/${currentUpcomingMovie.id}/videos?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setUpcomingTrailer(data.results)
        }
        getUpcomingTrailer();
    }, [currentUpcomingMovie])

    //===================================================\\
    //===== TOP RATED MOVIE TRAILERS AND CLICK EVENT ===== \\
    //===================================================\\
    const handleCurrentTopRatedMovie = (e)=>{
        const findCurrentTopRatedMovie = topRatedMovies.find((topRatedMovie)=>topRatedMovie.original_title === e.target.alt);
        
        setCurrentTopRatedMovie(findCurrentTopRatedMovie)
    }
    
    useEffect(()=>{
        async function getTopRatedTrailer() {
            const url = `https://api.themoviedb.org/3/movie/${currentTopRatedMovie.id}/videos?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setTopRatedTrailer(data.results)
        }
        getTopRatedTrailer();
    }, [currentTopRatedMovie])

    //===================================================\\
    //===== POPULAR MOVIE CASTS AND CREWS ===== \\
    //===================================================\\
    useEffect(()=>{
        async function getPopularCasts() {
            const url = `https://api.themoviedb.org/3/movie/${currentPopularMovie.id}/credits?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setPopularCasts(data.cast)
        }
        getPopularCasts();
    }, [currentPopularMovie])

    useEffect(()=>{
        async function getPopularCrews() {
            const url = `https://api.themoviedb.org/3/movie/${currentPopularMovie.id}/credits?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setPopularCrews(data.crew)
        }
        getPopularCrews();
    }, [currentPopularMovie])

    //===================================================\\
    //===== UPCOMING MOVIE CASTS AND CREWS ===== \\
    //===================================================\\
    useEffect(()=>{
        async function getUpcomingCasts() {
            const url = `https://api.themoviedb.org/3/movie/${currentUpcomingMovie.id}/credits?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setUpcomingCasts(data.cast)
        }
        getUpcomingCasts();
    }, [currentUpcomingMovie])

    useEffect(()=>{
        async function getUpcomingCrews() {
            const url = `https://api.themoviedb.org/3/movie/${currentUpcomingMovie.id}/credits?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setUpcomingCrews(data.crew)
        }
        getUpcomingCrews();
    }, [currentUpcomingMovie])
    // console.log(casts)
    return (
        <>  
            <Nav />
            { 
                featuredMovie && featuredMovie.map((featured) => (
                    featured.type === "Trailer" && featured.name === "Official Trailer" || featured.name === "Official HBO Max Trailer" ?
                    <div className="gallery">
                        <iframe
                        src={ `https://www.youtube.com/embed/${featured.key}?autoplay=1&mute=1&showinfo=0&controls=1&loop=1&playlist=${featured.key}` }
                        className="video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        title="video"
                        />
                        <MdVolumeMute className="mute" />
                    </div>
                    
                    : null 
            ))
            }
            {/* <div className="controls"> */}
                {/* <button className="mute">Mute</button> */}
            {/* </div> */}
            <div className="category">
                <h1>Popular Movies</h1>
            </div>
            <div className="movie-section1">
                {/* <div className="category">
                    <h1>Popular Movies</h1>
                </div> */}
            
                <MdChevronLeft size={40} className="slider-icon left" onClick={slidePopularLeft}/>
                    <div className="popular-cards">
                        
                        {
                            popularMovies.map((popularMovie) => (
                                <button className="card-btn" onClick={()=> {setPopularOpenModal(true)}}>
                                    <div className="card-image">
                                        <img 
                                        // key={popularMovie.id}
                                        src={ `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}` } 
                                        className="poster" 
                                        alt={popularMovie.original_title} 
                                        onClick={handleCurrentPopularMovie} />
                                    </div>
                                </button>
                            ))
                        }
                        
                    </div>
                <MdChevronRight size={40} className="slider-icon right" onClick={slidePopularRight}/>
                
                    <div className="modal">
                        {openPopularModal && <PopularModal closeModal={setPopularOpenModal} popularCrews={popularCrews} popularCasts={popularCasts} popularTrailer={popularTrailer} currentPopularMovie={currentPopularMovie} />}
                    </div>
            </div>
            <div className="category">
                <h1>Upcoming Movies</h1>
            </div>
            <div className="movie-section2">
                <MdChevronLeft size={40} className="slider-icon left" onClick={slideUpcomingLeft}/>
                    <div className="upcoming-cards">
                        {
                            upcomingMovies.map((upcomingMovie) => (
                                <button className="card-btn" onClick={()=> {setUpcomingOpenModal(true)}}>
                                    <img 
                                    // key={upcomingMovie.id}
                                    src={ `https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}` } 
                                    className="poster" 
                                    alt={upcomingMovie.original_title}
                                    onClick={handleCurrentUpcomingMovie}/>
                                </button>
                            ))
                        }
                    </div>
                <MdChevronRight size={40} className="slider-icon right" onClick={slideUpcomingRight}/>
                    <div className="modal">
                        {openUpcomingModal && <UpcomingModal closeModal={setUpcomingOpenModal} upcomingCrews={upcomingCrews} upcomingCasts={upcomingCasts} upcomingTrailer={upcomingTrailer} currentUpcomingMovie={currentUpcomingMovie} />}
                    </div>
            </div>
            <div className="category">
                <h1>Top Rated Movies</h1>
            </div>
            <div className="movie-section3">
                <MdChevronLeft size={40} className="slider-icon left" onClick={slideTopRatedLeft}/>
                    <div className="toprated-cards">
                        {
                            topRatedMovies.map((topRatedMovie) => (
                                <button className="card-btn" onClick={()=> {setTopRatedOpenModal(true)}}>
                                        <img 
                                        // key={topRatedMovie.id}
                                        src={ `https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}` } 
                                        className="poster" 
                                        alt={topRatedMovie.original_title}
                                        onClick={handleCurrentTopRatedMovie}/>
                                </button>
                            ))
                        }
                    </div>
                <MdChevronRight size={40} className="slider-icon right" onClick={slideTopRatedRight}/>
                    <div className="modal">
                        {openTopRatedModal && <TopRatedModal closeModal={setTopRatedOpenModal} topRatedTrailer={topRatedTrailer} currentTopRatedMovie={currentTopRatedMovie} />}
                    </div>
            </div>
            
        </>
    )
}

export default Movies;