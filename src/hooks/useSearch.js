import { useEffect, useRef, useState } from 'react'

export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstSearch = useRef(true)

    useEffect( () => {
        if (isFirstSearch.current) {
            isFirstSearch.current = search === ''
            return
        }
        if (search === '') {
            setError('No se puede hacer una busqueda vacia')
            return
        }
        if(search.length < 3) {
            setError('Debe contener al menos 3 caracteres las busqueda');
            return
        }
        if (search.match(/\d/)) {
            setError('No se puede buscar una pelicula con un numero')
            return
        }
        setError(null)
    }, [search])

    return { search, error, setSearch }
}