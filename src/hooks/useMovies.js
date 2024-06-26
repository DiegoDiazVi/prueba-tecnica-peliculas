import { useState, useRef, useCallback } from 'react'
import { fetchMovies } from '../services/fetchMovies';

function useMovies({search}) {
    const previousSearch = useRef(search)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const getMovies =  useCallback(async ({ search }) => {
            if((search === '') || (previousSearch.current === search)) return

            try {
                setLoading(true)
                const response = await fetchMovies(search)
                setMovies(response)
                previousSearch.current = search
            } catch (error) {
                console.error(error.message)
            } finally {
                setLoading(false)
            }
        }, [])

    return { movies, getMovies, loading }
}

export { useMovies }