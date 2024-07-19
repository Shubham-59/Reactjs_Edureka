import React from 'react';
import './SaveForLaterList.css';

const SaveForLaterList = ({ saveForLater, deleteSaveForLater }) => (
    <div className="save-for-later-list">
        {saveForLater.map(movie => (
            <div className="save-for-later-item" key={movie.id}>
                <img src={movie.thumbnail} alt={movie.title} className="movie-thumbnail" />
                <div className="movie-info">
                    <h5>{movie.title}</h5>
                    <p>{movie.description}</p>
                    <p>Price: ${movie.price}</p>
                    <p>Rating: {movie.rating}</p>
                    <button className="btn btn-danger" onClick={() => deleteSaveForLater(movie.id)}>Remove</button>
                </div>
            </div>
        ))}
    </div>
);

export default SaveForLaterList;
