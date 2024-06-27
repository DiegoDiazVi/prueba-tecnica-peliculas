import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch';
import './App.css'

function App() {
  const { movies, loading, getMovies } = useMovies();
  const { search, error, setSearch} = useSearch();

  const handlerSubmit = (event) => {
    event.preventDefault();
    const newSearch = event.target.query.value
    setSearch(newSearch);
    getMovies(newSearch)
  }

  return (
    <div className='page'>
      <header className='header'>
        <h1>Movies search</h1>
        <form className='form' onSubmit={handlerSubmit}>
          <input name='query' type="text" placeholder='Avengers, Matrix, Cars...'/>
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main className='movies-container'>
        { loading ? <p>Cargando ...</p> : <Movies movies={movies}/> }
      </main>
    </div>
  )
}

export default App
