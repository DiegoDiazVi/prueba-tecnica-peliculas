import { API_KEY, API_URL } from "../utils/constants";

const fetchMovies = async (search) => {
    const searchParams = new URLSearchParams({ apikey: API_KEY, s: search });
    try {
        const response = await fetch(`${API_URL}?${searchParams}`);
        const json = await response.json();

        if (json.Response === 'False') {
            throw new Error(json.Error)
        }

        const movies = json.Search
        return movies?.map(movie => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                image: movie.Poster
        }))
    } catch (error) {
        throw new Error(`Error fetching movies: ${error.message}`);
    }
}
export { fetchMovies }