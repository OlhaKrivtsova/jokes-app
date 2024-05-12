import styles from './JokeItem.module.css';
import {Link} from 'react-router-dom';
import {Joke} from './JokeList';

interface JokeItemProps extends Joke {}

const JokeItem = ({id, topic, text}: JokeItemProps) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{topic}</figcaption>
      </figure>
      <Link to={`${id}`} className='btn'>
        Expand
      </Link>
    </li>
  );
};

export default JokeItem;
