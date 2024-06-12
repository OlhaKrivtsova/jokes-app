import styles from './HighlightedJoke.module.css';
import {IJoke} from '../../utils/firebase-api';

interface HighlightedJokeProps extends IJoke {}

const HighlightedJoke = (props: HighlightedJokeProps) => {
  return (
    <figure className={styles.joke}>
      <p>{props.text}</p>
      <figcaption>{props.topic}</figcaption>
    </figure>
  );
};

export default HighlightedJoke;
