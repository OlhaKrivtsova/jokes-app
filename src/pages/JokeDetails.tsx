import {useParams, Routes, Route, Link} from 'react-router-dom';
import HighlightedJoke from '../components/jokes/HighlightedJoke';
import NoJokesFound from '../components/jokes/NoJokesFound';
import Comments from '../components/comments/Comments';
// import styles from './JokeDetails.module.css';

import {Joke} from '../components/jokes/JokeList';

const DUMMY_JOKES: Joke[] = [
  {
    id: 'j1',
    topic: 'Actors',
    text: 'Why do we tell actors to "break a leg?" Because every play has a cast.',
  },
  {
    id: 'j2',
    topic: 'General',
    text: `I was going to tell a time traveling joke, but you guys didn't like it.
    `,
  },
];

// type JokeDetailsProps = {
//   children?: React.ReactNode;
// };

type JokeDetailsParams = {
  id: string;
};

const JokeDetails = () => {
  const params = useParams<JokeDetailsParams>();
  const joke = DUMMY_JOKES.find(item => item.id === params.id);

  if (!joke) return <NoJokesFound />;
  if (!params.id) return <p className='centered'>No comments.</p>;

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              {' '}
              <HighlightedJoke {...joke} />
              <div className='centered'>
                <Link className='btn' to='comments'>
                  Comments
                </Link>
              </div>
            </>
          }
        />

        <Route
          path='comments'
          element={
            <>
              <Link to='../'>return to the joke</Link>
              <Comments jokeId={params.id} />{' '}
            </>
          }
        />
      </Routes>
    </>

    // <>
    //   <Route path={url} exact>
    //     <HighlightedJoke {...joke} />
    //     {/* </Route>
    //   <Route path={url} exact> */}
    //     <div className='centered'>
    //       <Link className='btn' to={`${url}/comments`}>
    //         Comments
    //       </Link>
    //     </div>
    //   </Route>
    //   <Route path={`${url}/comments`}>
    //     <Link to={url}>return to the joke</Link>
    //     <Comments jokeId={jokeId} />
    //   </Route>
    // </>
  );
};

export default JokeDetails;
