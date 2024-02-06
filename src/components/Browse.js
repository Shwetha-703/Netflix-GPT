import { useSelector } from 'react-redux';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { NETFLIX_BG } from '../utils/constants';
import GPTSearch from './GPTSearch';
import Header from './Header';
import VideoContainer from './VideoContainer';
import VideoListContainer from './VideoListContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGpt = useSelector(store=>store.gpt.showGpt);
  return (
    <div>
      <Header/>
    <div className="absolute -z-10 ">
        <img className="h-screen object-cover md:h-fit" alt="Netflix_BG" src={NETFLIX_BG}/>
    </div>
      {showGpt ? (<GPTSearch/>) : (
        <>
        <VideoContainer />
        <VideoListContainer/>
        </>
        )
      }
    </div>
  )
}

export default Browse;
