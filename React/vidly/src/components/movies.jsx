import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import paginate from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All Genres",
  };

  componentDidMount() {
    let genres = [{ name: "All Genres", _id: 0 }, ...getGenres()];
    genres.push(genres);
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (e) => {
    let movies = this.state.movies;
    movies.splice(e, 1);
    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <h2>
          {this.state.movies.length === 0 &&
            "There are no movies in the database"}
        </h2>
        <h2>
          {this.state.movies.length > 0 &&
            `Showing ${this.state.movies.length} in the database`}
        </h2>
        {this.renderTable()}
      </div>
    );
  }

  handleClick = (m) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(m);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenreSelect = (genre) => {
    let movies = getMovies();

    if (genre === "All Genres") {
      this.setState({ movies: movies, currentGenre: "All Genres" });
      return;
    }

    movies = movies.filter((m) => m.genre.name === genre);
    this.setState({ movies: movies, currentGenre: genre });
    this.handlePageChange(1);
  };

  renderTable = () => {
    const {
      currentPage,
      pageSize,
      totalItems = this.state.movies.length,
    } = this.state;

    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      pageSize
    );

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            textProperty={"name"}
            idProperty={"_id"}
            currentGenre={this.state.currentGenre}
          />
        </div>
        <div className="col">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Like</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((m) => (
                <tr key={this.state.movies.indexOf(m)}>
                  <th scope="row">{this.state.movies.indexOf(m)}</th>
                  <td>{m.title}</td>
                  <td>{m.genre.name}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <Like liked={m.liked} onClick={() => this.handleClick(m)} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(movies.indexOf(m))}
                      movie={m}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            pageSize={pageSize}
            totalItems={totalItems}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  };
}

export default Movies;
