import { useCallback } from 'react';
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';
import './App.css'
import { Header } from './components/Header';

function App() {
  const { search, error, setSearch } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search });

  const handlerSubmit = (event) => {
    event.preventDefault();
    getMovies({ search })
  }

  const handlerInput = (event) => {
    const inputValue = event.target.value
    if (inputValue === ' ') return
    setSearch(inputValue)
    debouceGetMovies(inputValue)
  }

  const debouceGetMovies = useCallback(
    debounce((search) => getMovies({ search }), 300),
    [getMovies]
  )


  return (
    <div className='page'>
      <Header error={error} search={search} handlerInput={handlerInput} handlerSubmit={handlerSubmit}/>
      <main className='movies-container'>
        { loading ? <p>Cargando ...</p> : <Movies movies={movies} /> }
      </main>
    </div>
  )
}

export default App
