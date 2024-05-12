import JokeList from '../components/jokes/JokeList';

// interface ShowJokesProps {
//   children?: React.ReactNode;
// }

const DUMMY_JOKES = [
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

const ShowJokes = () => {
  // if (!jokes[0]) {
  //   return <NoJokesFound />;
  // }

  return <JokeList jokes={DUMMY_JOKES} />;

  // const linkList = DUMMY_JOKES.map(item => (
  //   <li key={item.id}>
  //     <Link to={`${item.id}`}>{item.name}</Link>
  //   </li>
  // ));

  // return (
  //   <>
  //     <Routes>
  //       <Route
  //         index
  //         element={
  //           <>
  //             <div className='centered'>Joke's list</div>
  //             <ul>{linkList}</ul>
  //           </>
  //         }
  //       />

  //       <Route path=':id' element={<JokeDetails />} />
  //     </Routes>
  //   </>
  // );
};

export default ShowJokes;
