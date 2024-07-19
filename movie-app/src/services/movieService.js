const API_URL = 'http://localhost:3005';

export const fetchMovies = async () => {
    const response = await fetch(`${API_URL}/movies`);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
};

export const fetchSaveForLater = async () => {
    const response = await fetch(`${API_URL}/saveForLater`);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
};

export const addSaveForLater = async (movie) => {
    const response = await fetch(`${API_URL}/saveForLater`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    });
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
};

export const deleteSaveForLater = async (id) => {
    console.log(`Attempting to delete movie with id: ${id}`);
    const response = await fetch(`${API_URL}/saveForLater/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        console.error(`Failed to delete movie with id: ${id}`, response.statusText);
        throw new Error(response.statusText);
    }
    return await response.json();
};

export const isMovieInSaveForLater = async (movieId) => {
    const saveForLaterList = await fetchSaveForLater();
    return saveForLaterList.some(movie => movie.id === movieId);
};
