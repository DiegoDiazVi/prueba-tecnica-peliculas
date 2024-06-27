export function Movies ({movies}) {
    console.log(movies)
    return (
        <>
        <div>
            {
                movies.map(movie => {
                    return (
                        <section key={movie.id}>
                            <p>{movie.title}</p>
                            <p>{movie.year}</p>
                            <img src={movie.image} alt={movie.title} />
                        </section>
                    )
                })
            }
        </div>
        </>
    )
}