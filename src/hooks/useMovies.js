import { useState } from 'react'
import { fetchMovies } from '../services/fetchMovies';

function useMovies({search}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const getMovies = async () => {
        if(search === '') return
        try {
            setLoading(true)
            const response = await fetchMovies(search)
            setMovies(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return { movies, getMovies, loading }
}

export { useMovies }