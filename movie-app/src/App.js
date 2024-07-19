import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SaveForLaterList from './components/SaveForLaterList';
import { fetchMovies, fetchSaveForLater, addSaveForLater, deleteSaveForLater, isMovieInSaveForLater } from './services/movieService';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [saveForLater, setSaveForLater] = useState([]);

    useEffect(() => {
        fetchMovies().then(setMovies).catch(console.error);
        fetchSaveForLater().then(setSaveForLater).catch(console.error);
    }, []);

    const handleAddSaveForLater = async (movie) => {
        try {
            const isInSaveForLater = await isMovieInSaveForLater(movie.id);
            if (!isInSaveForLater) {
                await addSaveForLater(movie);
                const updatedSaveForLater = await fetchSaveForLater();
                setSaveForLater(updatedSaveForLater);
            } else {
                alert('This movie is already in the Save For Later list.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteSaveForLater = (id) => {
        deleteSaveForLater(id)
            .then(() => fetchSaveForLater().then(setSaveForLater))
            .catch(console.error);
    };

    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col">
                    <h3>Movies</h3>
                    <MovieList movies={movies} addSaveForLater={handleAddSaveForLater} />
                </div>
                <div className="col">
                    <h3>Favourite</h3>
                    <SaveForLaterList saveForLater={saveForLater} deleteSaveForLater={handleDeleteSaveForLater} />
                </div>
            </div>
        </div>
    );
};

export default App;
