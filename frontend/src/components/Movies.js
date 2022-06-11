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
        console.log(e.target.alt)
        const findCurrentPopularMovie = popularMovies.find((popularMovie)=>popularMovie.original_title === e.target.alt);
    
        setCurrentPopularMovie(findCurrentPopularMovie)
    }

    const handleCurrentUpcomingMovie = (e)=>{
        console.log(e.target.alt)
        const findCurrentUpcomingMovie = upcomingMovies.find((upcomingMovie)=>upcomingMovie.original_title === e.target.alt);
        
        setCurrentUpcomingMovie(findCurrentUpcomingMovie)
    }

    const handleCurrentTopRatedMovie = (e)=>{
        console.log(e.target.alt)
        const findCurrentTopRatedMovie = topRatedMovies.find((topRatedMovie)=>topRatedMovie.original_title === e.target.alt);
        
        setCurrentTopRatedMovie(findCurrentTopRatedMovie)
    }
    // console.log(currentUpcomingMovie)
    // console.log(currentPopularMovie)
    // console.log(featuredMovie)
    // console.log(randomMovie.key)
    // const imageUrl = `https://image.tmdb.org/t/p/w500/${popularMovies.poster_path}`
    // console.log(popularMovies)
    
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
                    {openPopularModal && <PopularModal closeModal={setPopularOpenModal} currentPopularMovie={currentPopularMovie} randomMovie={randomMovie}/>}
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
                    {openUpcomingModal && <UpcomingModal closeModal={setUpcomingOpenModal} currentUpcomingMovie={currentUpcomingMovie} randomMovie={randomMovie}/>}
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
                    {openTopRatedModal && <TopRatedModal closeModal={setTopRatedOpenModal} currentTopRatedMovie={currentTopRatedMovie} randomMovie={randomMovie}/>}
                </div>
            </div>
            
        </>
    )
}

export default Movies;