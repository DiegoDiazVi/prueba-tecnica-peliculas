import { API_KEY, API_URL } from "../utils/constants";

const fetchMovies = async (search) => {
    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`);
        const json = await response.json();
        if (json.Response === 'False') {
            throw new Error(json.Error)
        }
        const { Search } = json
        const mappedMovies = Search?.map(movie => {
            return {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                image: movie.Poster
            }
        })
        return mappedMovies
    } catch (error) {
        throw error
    }
}
export { fetchMovies }