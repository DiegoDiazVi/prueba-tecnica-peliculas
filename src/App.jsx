import { useEffect, useState } from 'react'
import { Movies } from './components/Movies'
import { fetchMovies } from './services/fetchMovies'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const handlerSubmit = (event) => {
    event.preventDefault();
    const query = event.target.query.value
    setSearch(query);
  }

  useEffect(() => {
    if (search === '') return;
    fetchMovies(search)
      .then(response => {
        setMovies(response)
      })
      .catch(error => console.log(error))
  }, [search])

  return (
    <div>
      <header>
        <h1>Movies search</h1>
        <form onSubmit={handlerSubmit}>
          <input name='query' type="text" placeholder='Avengers, Matrix, Cars...'/>
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        { movies && <Movies movies={movies}/> }
      </main>
    </div>
  )
}

export default App
