import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Upcoming from './pages/Upcoming';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

const Home = () => <div className="p-4">This is Home Page</div>;
const Trending = () => <div className="p-4">This is Trending Page</div>;
const UpcomingPage = () => <div className="p-4">This is Upcoming Page</div>;
const Genres = () => <div className="p-4">This is Genres Page</div>;
const Favorites = () => <div className="p-4">This is Favorites Page</div>;
const Login = () => <div className="p-4">This is Login Page</div>;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const showHome = () => setCurrentPage('home');
  const showTrending = () => setCurrentPage('trending');
  const showUpcoming = () => setCurrentPage('upcoming');
  const showGenres = () => setCurrentPage('genres');
  const showFavorites = () => setCurrentPage('favorites');
  const showLogin = () => setCurrentPage('login');

  let currentView;

  switch (currentPage) {
    case 'home':
      currentView = <Home />;
      break;
    case 'trending':
      currentView = <Trending />;
      break;
    case 'upcoming':
      currentView = <UpcomingPage />;
      break;
    case 'genres':
      currentView = <Genres />;
      break;
    case 'favorites':
      currentView = <Favorites />;
      break;
    case 'login':
      currentView = <Login />;
      break;
    default:
      currentView = <NotFound />;
  }

  return (
    <div className="container mx-auto">
      <Navbar
        showHome={showHome}
        showTrending={showTrending}
        showUpcoming={showUpcoming}
        showGenres={showGenres}
        showFavorites={showFavorites}
        showLogin={showLogin}
      />
      {currentView}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
