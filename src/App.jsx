import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch';
import './App.css'

function App() {
  const { search, error, setSearch } = useSearch();
  const { movies, loading, getMovies } = useMovies({search});

  const handlerSubmit = (event) => {
    event.preventDefault();
    getMovies()
  }

  const handlerInput = (event) => {
    const inputValue = event.target.value
    if (inputValue === ' ') return
    setSearch(inputValue)
  }

  return (
    <div className='page'>
      <header className='header'>
        <h1>Movies search</h1>
        <form className='form' onSubmit={handlerSubmit}>
          <input name='query' type="text" value={search} placeholder='Avengers, Matrix, Cars...' onInput={handlerInput}/>
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
