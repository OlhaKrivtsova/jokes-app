import styles from './JokeList.module.css';
import JokeItem from './JokeItem';
import {useSearchParams} from 'react-router-dom';
import {IJoke} from '../../utils/firebase-api';

interface JokeListProps {
  jokes: IJoke[];
}

// type JokeListParams = [['sort', 'acs'], ['sort', 'desc']];

const sort = (jokes: IJoke[], isAscending: boolean): IJoke[] => {
  return jokes.sort((joke1, joke2) => {
    if (isAscending) {
      return joke1.id > joke2.id ? 1 : -1;
    }
    if (!isAscending) {
      return joke1.id < joke2.id ? 1 : -1;
    }
    return 0;
  });
};

const JokeList = ({jokes}: JokeListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortingOrder = searchParams.get('sort');

  const isAscending = sortingOrder === 'asc';
  const sortJokes = sort(jokes, isAscending);

  const sortHandler = () => {
    setSearchParams({sort: isAscending ? 'desc' : 'asc'});
  };

  return (
    <>
      <div className={styles.filter}>
        <button onClick={sortHandler}>
          {`sort by ${isAscending ? 'descending' : 'ascending'}`}
        </button>
      </div>
      <ul className={styles.list}>
        {sortJokes.map(joke => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            topic={joke.topic}
            text={joke.text}
          />
        ))}
      </ul>
    </>
  );
};

export default JokeList;
