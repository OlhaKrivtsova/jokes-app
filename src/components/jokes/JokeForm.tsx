import styles from './JokeForm.module.css';
import {useRef} from 'react';
import {IAddedJoke} from '../../utils/firebase-api';

interface JokeFormProps {
  onAddJoke(joke: IAddedJoke): void;
  isLoading: boolean;
}

const JokeForm = (props: JokeFormProps) => {
  const topicInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredTopic = topicInputRef.current?.value;
    const enteredText = textInputRef.current?.value;

    if (enteredTopic && enteredText)
      props.onAddJoke({topic: enteredTopic, text: enteredText});
  }

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {props.isLoading && (
        <div className='centered'>
          <p className='focused'>Loading...</p>
        </div>
      )}

      <div className={styles.control}>
        <label htmlFor='topic'>Topic</label>
        <input type='text' id='topic' ref={topicInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor='text'>Text</label>
        <textarea id='text' rows={5} ref={textInputRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className='btn'>Add Joke</button>
      </div>
    </form>
  );
};

export default JokeForm;
