export function Movies ({movies}) {
    console.log(movies)
    return (
        <>
            {
                movies.map(movie => {
                    return (
                        <section key={movie.id}>
                            <p className='title'>{movie.title}</p>
                            <p className='year'>{movie.year}</p>
                            <img className='image' src={movie.image} alt={movie.title} />
                        </section>
                    )
                })
            }
        </>
    )
}