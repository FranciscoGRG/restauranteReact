const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjlkY2U4YWU2ZmFiYTU1NDlhN2EwMGY0ODJjMGZhZiIsInN1YiI6IjY1YjdjZTljYTI4NGViMDE2MzBiMzBiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E_NhWU7wArsmfx2HM1P1cxDOrFHv4Kd-R1SELKDuinQ'

export const ObtenerPeliculas = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };

    try {
        const responseMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const dataMovies = await responseMovies.json();
        return (dataMovies.results);
    } catch (error) {
        console.error(error);
    }
};

export const ObtenerGerenos = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };

    try {
        const responseGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', options);
        const dataGenres = await responseGenres.json();
        return (dataGenres.genres);
    } catch (error) {
        console.error(error);
    }
};

export const ObtenerPelisNuevas = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return (data.results)
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
};

export const ObtenerPelisId = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=es`;

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
        return(data.title);
    } catch (error) {
        console.error(error);
    }
};

