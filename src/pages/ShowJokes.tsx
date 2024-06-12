import JokeList from '../components/jokes/JokeList';
import useHttp from '../hooks/use-http';
import {getJokes} from '../utils/firebase-api';
import {useEffect} from 'react';
import NoJokesFound from '../components/jokes/NoJokesFound';
import {IJoke} from '../utils/firebase-api';

const ShowJokes = () => {
  const {
    sendHttpRequest,
    data: jokes,
    status,
    error,
  } = useHttp<IJoke[]>(getJokes, true);

  useEffect(() => {
    sendHttpRequest();
  }, [sendHttpRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <p className='focused'>Loading...</p>
        {/* <Loader /> */}
      </div>
    );
  }

  if (error || !jokes) {
    return (
      <div className='centered'>
        <p className='focused'>{error}</p>
      </div>
    );
  }

  if (!jokes[0]) {
    return <NoJokesFound />;
  }

  return <JokeList jokes={jokes} />;
};

export default ShowJokes;
