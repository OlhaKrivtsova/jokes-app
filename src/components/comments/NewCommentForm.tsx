import styles from './NewCommentForm.module.css';
import {useRef} from 'react';

interface NewCommentFormProps {
  jokeId: string;
  onAddComment(): void;
}

const NewCommentForm = (props: NewCommentFormProps) => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const commentText = commentTextRef.current?.value;
    console.log(props.jokeId, commentText);
    props.onAddComment();

    // sendHttpRequest({
    //   jokeId: props.jokeId,
    //   commentData: {text: commentText},
    // });
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles.control}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className='btn'>Add</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
