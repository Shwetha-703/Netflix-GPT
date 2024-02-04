import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import Header from './Header';
import VideoContainer from './VideoContainer';
import VideoListContainer from './VideoListContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <VideoContainer />
      <VideoListContainer/>
    </div>
  )
}

export default Browse;
