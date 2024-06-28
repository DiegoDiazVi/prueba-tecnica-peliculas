export function Header ({ error, search, handlerSubmit, handlerInput }) {
    return (
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
    )
}