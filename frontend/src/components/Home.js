import React, {useState, useEffect} from 'react';

function Home() {
    //===== USE STATE FUNCTIONS ===== \\
    // const [movies, setMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    //===== API URL ===== \\
    async function getPopularMovies() {
        const apiKey = "4464b123b33f0570ee7200292fffe1a2"
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

        const response = await fetch(url)
        const data = await response.json()
        setPopularMovies(data.results)
    }

    useEffect(()=>{
        getPopularMovies();
    }, []);
    // const imageUrl = `https://image.tmdb.org/t/p/w500/${popularMovies.poster_path}`
    // console.log(popularMovies)
    return (
        <>
            <div className="gallery">
                <h1>Hello World!</h1>
            </div>
            <div className="movie-section1">
                <h1>Popular Movies</h1>
                {
                    popularMovies.map((popularMovie) => (
                        <div className="card-image">
                            <img src={ `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}` } className="poster"/>
                        </div>
                    ))
                }
                <div className="cards">

                </div>
            </div>
            <div className="movie-section2">
                <h1>Section2</h1>
            </div>
            <div className="movie-section3">
                <h1>Section3</h1>
            </div>
        </>
    )
}

export default Home;