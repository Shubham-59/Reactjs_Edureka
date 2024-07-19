import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SaveForLaterList from './components/SaveForLaterList';
import store from './redux/Store'; // Import the store

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <MovieList />
          </div>
          <div className="col-6">
            <SaveForLaterList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
