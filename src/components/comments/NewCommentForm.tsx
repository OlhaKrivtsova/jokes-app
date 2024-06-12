import styles from './NewCommentForm.module.css';
import {useRef, useEffect} from 'react';
import useHttp from '../../hooks/use-http';
import {addComment} from '../../utils/firebase-api';

interface NewCommentFormProps {
  jokeId: string;
  onAddComment(): void;
}

const NewCommentForm = ({jokeId, onAddComment}: NewCommentFormProps) => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const {sendHttpRequest, status, error} = useHttp(addComment);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddComment();
    }
  }, [status, error, onAddComment]);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const commentText = commentTextRef.current?.value;
    if (commentText?.trim()[0]) {
      sendHttpRequest({
        jokeId: jokeId,
        commentData: {text: commentText},
      });
    } else {
      onAddComment();
    }
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
