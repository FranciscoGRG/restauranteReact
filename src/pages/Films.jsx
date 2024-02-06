// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { ObtenerPeliculas } from '../js/script';
import { ObtenerGerenos } from '../js/script';

function Films() {
    const [movies, setMovies] = useState(['']);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {    
          try {            
            const pelis = await ObtenerPeliculas()
            setMovies(pelis)

            const generos = await ObtenerGerenos()
            setGenres(generos)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchMovies();
      }, []);

    return (
        <>
            <h1 className='title'>Ultimos estrenos</h1>

            <ul className='moviesGrid'>
                {movies.map((peli) => (
                    <MovieCard key={peli.id} peli={peli} genres={genres} />
                ))}
            </ul>
        </>
    )
}

export default Films
