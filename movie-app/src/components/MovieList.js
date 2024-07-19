import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, addSaveForLater }) => (
    <div className="movie-list">
        {movies.map(movie => (
            <div className="movie-item" key={movie.id}>
                <img src={movie.thumbnail} alt={movie.title} className="movie-thumbnail" />
                <div className="movie-info">
                    <h5>{movie.title}</h5>
                    <p>🎥{movie.description}</p>
                    <p>Price: ₹{movie.price}</p>
                    <p>Rating: ⭐{movie.rating}</p>
                    <button className="btn btn-primary" onClick={() => addSaveForLater(movie)}>Add to Save For Later</button>
                </div>
            </div>
        ))}
    </div>
);

export default MovieList;
