import styles from './HighlightedJoke.module.css';
import {Joke} from './JokeList';

interface HighlightedJokeProps extends Joke {}

const HighlightedJoke = (props: HighlightedJokeProps) => {
  return (
    <figure className={styles.joke}>
      <p>{props.text}</p>
      <figcaption>{props.topic}</figcaption>
    </figure>
  );
};

export default HighlightedJoke;
