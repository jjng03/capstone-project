import React, {useState, useEffect} from 'react';

function Movies() {
    //===== USE STATE FUNCTIONS ===== \\
    // const [movies, setMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState([]);

    //===== API KEY ===== \\
    const apiKey = "4464b123b33f0570ee7200292fffe1a2"

    //===== API URL ===== \\
    async function getPopularMovies() {
        // const apiKey = "4464b123b33f0570ee7200292fffe1a2"
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setPopularMovies(data.results)
    }

    useEffect(()=>{
        getPopularMovies();
    }, []);

    async function getUpcomingMovies() {
        // const apiKey = "4464b123b33f0570ee7200292fffe1a2"
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setUpcomingMovies(data.results)
    }

    useEffect(()=>{
        getUpcomingMovies();
    }, []);

    async function getTopRatedMovies() {
        // const apiKey = "4464b123b33f0570ee7200292fffe1a2"
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setTopRatedMovies(data.results)
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])

    async function getRandomMovie() {
        const url = `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${apiKey}&language=en-US`

        const response = await fetch(url)
        const data = await response.json()
        setRandomMovie(data.results)
    }

    useEffect(()=>{
        getRandomMovie();
    }, [])
    
    // const imageUrl = `https://image.tmdb.org/t/p/w500/${popularMovies.poster_path}`
    // console.log(popularMovies)
    return (
        <>
            <div className="gallery">
                <h1>Hello World!</h1>
            </div>
            <div className="movie-section1">
                <div className="category">
                    <h1>Popular Movies</h1>
                </div>
                <div className="cards">
                    {
                        popularMovies.map((popularMovie) => (
                            <div className="card-image">
                                <img src={ `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}` } className="poster" alt={popularMovie.original_title}/>
                            </div>
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
        </>
    )
}

export default Movies;