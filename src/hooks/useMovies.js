import { useState, useRef } from 'react'
import { fetchMovies } from '../services/fetchMovies';

function useMovies({search}) {
    const previousSearch = useRef(search)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const getMovies = async () => {
        if((search === '') || (previousSearch.current === search)) return

        try {
            setLoading(true)
            const response = await fetchMovies(search)
            setMovies(response)
            previousSearch.current = search
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { movies, getMovies, loading }
}

export { useMovies }