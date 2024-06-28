import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';
import './App.css'
import { useCallback } from 'react';

function App() {
  const { search, error, setSearch } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search });

  const handlerSubmit = (event) => {
    event.preventDefault();
    getMovies({ search })
  }

  const debouceGetMovies = useCallback(
    debounce((search) => getMovies({ search }), 300),
    [getMovies]
  )

  const handlerInput = (event) => {
    const inputValue = event.target.value
    if (inputValue === ' ') return
    setSearch(inputValue)
    debouceGetMovies(inputValue)
  }

  return (
    <div className='page'>
      <header className='header'>
        <h1>Movies search</h1>
        <form className='form' onSubmit={handlerSubmit}>
          <input
            name='query'
            type="text"
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            value={search}
            placeholder='Avengers, Matrix, Cars...'
            onInput={handlerInput}
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main className='movies-container'>
        { loading ? <p>Cargando ...</p> : <Movies movies={movies} /> }
      </main>
    </div>
  )
}

export default App
