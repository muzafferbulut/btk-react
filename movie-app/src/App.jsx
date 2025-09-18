import { useState } from "react";

const movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    Id: "27205",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  },
  ,
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
  },
];

const selected_movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    duration: 120,
    rating: 8.4,
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    duration: 140,
    rating: 8.9,
  },
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    duration: 130,
    rating: 9.1,
  },
];

const getAverage = (array) =>
  array.reduce((sum, value) => sum + value, 0) / array.length;

export default function App() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

function Nav() {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">
          <Logo />
          <Search />
          <NavSearchResult />
        </div>
      </div>
    </nav>
  );
}

function NavSearchResult() {
  return (
    <div className="col-4 text-end">
      <strong>5</strong> kayıt bulundu.
    </div>
  );
}

function Logo() {
  return (
    <div className="col-4">
      <i className="bi bi-camera-reels me-3"></i>
      Movie App
    </div>
  );
}

function Search() {
  return (
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Film ara.." />
    </div>
  );
}

function Main() {
  return (
    <main className="container">
      <div className="row mt-2">
        <div className="col-md-9">
          <MovieListContainer />
        </div>
        <div className="col-md-3">
          <MyMovieListContainer />
        </div>
      </div>
    </main>
  );
}

function MovieListContainer() {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setIsOpen1((val) => !val)}
      >
        {isOpen1 ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen1 && <MovieList />}
    </div>
  );
}

function MovieList() {
  const [movies, setMovies] = useState(movie_list);

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.Id} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
  return (
    <div className="col mb-2">
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">{movie.Title}</h6>
          <div>
            <i className="bi bi-calendar2-date"></i>
            <span> {movie.Year} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyMovieListContainer() {
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);
  const [isOpen2, setIsOpen2] = useState(true);
  const avgRating = getAverage(selected_movie_list.map((m) => m.rating));
  const avgDuration = getAverage(selected_movie_list.map((m) => m.duration));
  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setIsOpen2((val) => !val)}
      >
        {isOpen2 ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen2 && (
        <>
          <div className="card mb-2">   
            <div className="card-body">
              <h5>Listeye {selectedMovies.length} film eklendi. </h5>
              <div className="d-flex justify-content-between">
                <p>
                  <i className="bi bi-star-fill text-warning"></i>
                  <span>{avgRating.toFixed(2)}</span>
                </p>
                <p>
                  <i className="bi bi-hourglass text-warning"></i>
                  <span>{avgDuration.toFixed(0)} min.</span>
                </p>
              </div>
              {selectedMovies.map((movie) => (
                <div className="card mb-2" key={movie.Id}>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h6 className="card-title">{movie.Title}</h6>
                        <div className="d-flex justify-content-between ">
                          <p>
                            <i className="bi bi-star-fill text-warning"></i>
                            <span> {movie.rating} </span>
                          </p>
                          <p>
                            <i className="bi bi-hourglass text-warning"></i>
                            <span> {movie.duration} min. </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MyListSummary(){
  
}