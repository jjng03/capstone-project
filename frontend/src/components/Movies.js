import React, {useState, useEffect} from 'react';
import Modal from './Modal.js';

function Movies() {
    //===== USE STATE FUNCTIONS ===== \\
    const [currentMovie, setCurrentMovie] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState([]);
    const [openModal, setOpenModal] = useState(false);

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

    async function getRandomMovie() {
        const url = `https://api.themoviedb.org/3/movie/338953/videos?api_key=${apiKey}&language=en-US`

        const response = await fetch(url)
        const data = await response.json()
        setRandomMovie(data.results[1])
    }

    useEffect(()=>{
        getRandomMovie();
    }, [])
    
    const handleCurrentMovie = (e)=>{
        console.log(e.target.alt)
        const findCurrentMovie = popularMovies.find((popularMovie)=>popularMovie.original_title === e.target.alt);
        setCurrentMovie(findCurrentMovie)
    }

    // console.log(randomMovie.key)
    // const imageUrl = `https://image.tmdb.org/t/p/w500/${popularMovies.poster_path}`
    // console.log(popularMovies)
    return (
        <>  
            <div className="gallery">
                <iframe
                src={`https://www.youtube.com/embed/${randomMovie.key}?autoplay=1&mute=1&showinfo=0&controls=1`}
                className="video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title="video"
                />
            </div>
            <div className="movie-section1">
                <div className="category">
                    <h1>Popular Movies</h1>
                </div>
                <div className="cards">
                    {
                        popularMovies.map((popularMovie) => (
                            <button className="card-btn" onClick={()=> {setOpenModal(true)}}>
                                <div className="card-image">
                                    <img 
                                    src={ `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}` } 
                                    className="poster" 
                                    alt={popularMovie.original_title} 
                                    onClick={handleCurrentMovie}/>
                                </div>
                            </button>
                        ))
                    }
                </div>
                
            </div>
            <div className="movie-section2">
                <div className="category">
                    <h1>Upcoming Movies</h1>
                </div>
                <div className="cards">
                    {
                        upcomingMovies.map((upcomingMovie) => (
                            <div className="card-image">
                                <img src={ `https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}` } className="poster" alt={upcomingMovie.original_title}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="movie-section3">
                <div className="category">
                    <h1>Top Rated Movies</h1>
                </div>
                <div className="cards">
                    {
                        topRatedMovies.map((topRatedMovie) => (
                            <div className="card-image">
                                <img src={ `https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}` } className="poster" alt={topRatedMovie.original_title}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="modal">
                {openModal && <Modal closeModal={setOpenModal} currentMovie={currentMovie} />}
            </div>
        </>
    )
}

export default Movies;