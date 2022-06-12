import React, {useState, useEffect} from 'react';
import PopularModal from './PopularModal.js';
import UpcomingModal from './UpcomingModal.js';
import TopRatedModal from './TopRatedModal.js';
import Nav from './Nav.js';

function Movies() {
    //===== USE STATE FUNCTIONS ===== \\
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

    const [casts, setCasts] = useState([]);
    const [crews, setCrews] = useState([]);
    
    //===== API KEY ===== \\
    const apiKey = "4464b123b33f0570ee7200292fffe1a2"

    //===== API URL ===== \\
    async function getPopularMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setPopularMovies(data.results)
    }

    useEffect(()=>{
        getPopularMovies();
    }, []);

    async function getUpcomingMovies() {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setUpcomingMovies(data.results)
    }

    useEffect(()=>{
        getUpcomingMovies();
    }, []);

    async function getTopRatedMovies() {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setTopRatedMovies(data.results)
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])

    

    useEffect(()=>{
        async function getRandomMovie() {
            // const rando = data.results[Math.floor(Math.random() * data.results.length)]
            // const url = `https://api.themoviedb.org/3/movie/${rando}/videos?api_key=${apiKey}&language=en-US`
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
            const response = await fetch(url)
            const data = await response.json()
            const rando = data.results[Math.floor(Math.random() * data.results.length)]
            setRandomMovie(rando)
            // return response
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



    const handleCurrentPopularMovie = (e)=>{
        // console.log(e.target.alt)
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

    // console.log(popularTrailer)
    const handleCurrentUpcomingMovie = (e)=>{
        // console.log(e.target.alt)
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


    const handleCurrentTopRatedMovie = (e)=>{
        // console.log(e.target.alt)
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


    useEffect(()=>{
        async function getCasts() {
            const url = `https://api.themoviedb.org/3/movie/${currentPopularMovie.id}/credits?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setCasts(data.cast)
        }
        getCasts();
    }, [currentPopularMovie])

    useEffect(()=>{
        async function getCrews() {
            const url = `https://api.themoviedb.org/3/movie/${currentPopularMovie.id}/credits?api_key=${apiKey}&language=en-US`
            const response = await fetch(url)
            const data = await response.json()
            setCrews(data.crew)
        }
        getCrews();
    }, [currentPopularMovie])


    console.log(casts)
    return (
        <>  
            <Nav />
            { 
                featuredMovie && featuredMovie.map((featured) => (
                    featured.type === "Trailer" && featured.name === "Official Trailer" || featured.name === "Official HBO Max Trailer" ?
                    <div className="gallery">
                        <iframe
                        src={ `https://www.youtube.com/embed/${featured.key}?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=${featured.key}` }
                        className="video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        title="video"
                        />
                    </div>
                    : null 
            ))
            }
            <div className="movie-section1">
                <div className="category">
                    <h1>Popular Movies</h1>
                </div>
                <div className="cards">
                    {
                        popularMovies.map((popularMovie) => (
                            <button className="card-btn" onClick={()=> {setPopularOpenModal(true)}}>
                                <div className="card-image">
                                    <img 
                                    src={ `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}` } 
                                    className="poster" 
                                    alt={popularMovie.original_title} 
                                    onClick={handleCurrentPopularMovie} />
                                </div>
                            </button>
                        ))
                    }
                </div>
                <div className="modal">
                    {openPopularModal && <PopularModal closeModal={setPopularOpenModal} crews={crews} casts={casts} popularTrailer={popularTrailer} currentPopularMovie={currentPopularMovie} />}
                </div>
            </div>
            <div className="movie-section2">
                <div className="category">
                    <h1>Upcoming Movies</h1>
                </div>
                <div className="cards">
                    {
                        upcomingMovies.map((upcomingMovie) => (
                            <button className="card-btn" onClick={()=> {setUpcomingOpenModal(true)}}>
                                <div className="card-image">
                                    <img 
                                    src={ `https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}` } 
                                    className="poster" 
                                    alt={upcomingMovie.original_title}
                                    onClick={handleCurrentUpcomingMovie}/>
                                </div>
                            </button>
                        ))
                    }
                </div>
                <div className="modal">
                    {openUpcomingModal && <UpcomingModal closeModal={setUpcomingOpenModal} upcomingTrailer={upcomingTrailer} currentUpcomingMovie={currentUpcomingMovie} />}
                </div>
            </div>
            <div className="movie-section3">
                <div className="category">
                    <h1>Top Rated Movies</h1>
                </div>
                <div className="cards">
                    {
                        topRatedMovies.map((topRatedMovie) => (
                            <button className="card-btn" onClick={()=> {setTopRatedOpenModal(true)}}>
                                <div className="card-image">
                                    <img 
                                    src={ `https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}` } 
                                    className="poster" 
                                    alt={topRatedMovie.original_title}
                                    onClick={handleCurrentTopRatedMovie}/>
                                </div>
                            </button>
                        ))
                    }
                </div>
                <div className="modal">
                    {openTopRatedModal && <TopRatedModal closeModal={setTopRatedOpenModal} topRatedTrailer={topRatedTrailer} currentTopRatedMovie={currentTopRatedMovie} />}
                </div>
            </div>
            
        </>
    )
}

export default Movies;