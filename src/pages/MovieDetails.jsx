import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function MovieDetails() {

  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=es`;
      const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits`;

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjlkY2U4YWU2ZmFiYTU1NDlhN2EwMGY0ODJjMGZhZiIsInN1YiI6IjY1YjdjZTljYTI4NGViMDE2MzBiMzBiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E_NhWU7wArsmfx2HM1P1cxDOrFHv4Kd-R1SELKDuinQ'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovieDetails(data)
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }

      try {
        // Obtener detalles de la película
        const responseDetails = await fetch(url, options);
        const dataDetails = await responseDetails.json();
        setMovieDetails(dataDetails);

        // Obtener elenco de la película
        const responseCredits = await fetch(creditsUrl, options);
        const dataCredits = await responseCredits.json();
        setCast(dataCredits.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }

    };

    fetchMovieDetails();
  }, [id]);
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg flex justify-center items-center">
      {movieDetails ? (
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{movieDetails.title}</h1>
            <p className="text-gray-300 mb-6">{movieDetails.overview}</p>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Géneros: {movieDetails.genres.map(genre => genre.name).join(', ')}</h2>
                <h2 className="text-xl font-semibold mb-2">Puntuación: {movieDetails.vote_average}</h2>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Actores principales:</h2>
            <ul className="list-disc ml-6 mb-6">
              {cast.slice(0, 5).map(actor => (
                <li key={actor.id}>{actor.name}</li>
              ))}
            </ul>
            <Link to={`/buyTicket/${id}`}>
              <button className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline mb-4">
                Comprar Entrada
              </button>
            </Link>
          </div>
          <div className="flex-none">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movieImage mb-4 rounded-lg shadow"
            />
          </div>
        </div>
      ) : (
        <p className="text-gray-400">Cargando...</p>
      )}
    </div>
  );
  


}


export default MovieDetails