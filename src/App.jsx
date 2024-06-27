import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const handlerSubmit = (event) => {
    event.preventDefault();
    const query = event.target.query.value
    setSearch(query);
  }

  return (
    <div>
      <header>
        <h1>Movies search</h1>
        <form onSubmit={handlerSubmit}>
          <input name='query' type="text" placeholder='Avengers, Matrix, Cars...'/>
          <button type='submit'>Search</button>
        </form>
      </header>
    </div>
  )
}

export default App
