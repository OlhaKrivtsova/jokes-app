import {useParams, Routes, Route, Link} from 'react-router-dom';
import HighlightedJoke from '../components/jokes/HighlightedJoke';
import NoJokesFound from '../components/jokes/NoJokesFound';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import {getJoke} from '../utils/firebase-api';
import {useEffect} from 'react';
import {IJoke} from '../utils/firebase-api';

type JokeDetailsParams = {
  id: string;
};

const JokeDetails = () => {
  const {id} = useParams<JokeDetailsParams>();
  const {
    sendHttpRequest,
    status,
    data: joke,
    error,
  } = useHttp<IJoke>(getJoke, true);

  useEffect(() => {
    sendHttpRequest(id);
  }, [sendHttpRequest, id]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <p className='focused'>Loading...</p>
        {/* <Loader /> */}
      </div>
    );
  }

  if (error) {
    return (
      <div className='centered'>
        <p className='focused'>{error}</p>
      </div>
    );
  }

  if (!joke) return <NoJokesFound />;
  if (!id) return <p className='centered'>No comments.</p>;

  return (
    <>
      <HighlightedJoke {...joke} />
      <div className='centered'>
        <Link className='btn' to='comments'>
          Comments
        </Link>
      </div>

      <Routes>
        <Route
          path='comments'
          element={
            <>
              {/* <Link to='../'>return to the joke</Link> */}
              <Comments jokeId={id} />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default JokeDetails;
