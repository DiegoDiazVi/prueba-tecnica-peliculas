import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <header>
        <h1>Movies search</h1>
        <form>
          <input name='query' type="text" placeholder='Avengers, Matrix, Cars...'/>
          <button>Search</button>
        </form>
      </header>
    </div>
  )
}

export default App
