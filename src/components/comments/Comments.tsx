import styles from './Comments.module.css';
import CommentList from './CommentList';
import {useState, useCallback} from 'react';
import NewCommentForm from './NewCommentForm';

export interface Comment {
  id: string;
  text: string;
}

interface CommentsProps {
  jokeId: string;
}

const Comments = (props: CommentsProps) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const comments: Comment[] = [];

  const addCommentHandler = useCallback(() => {
    setIsAddingComment(false);
  }, []);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a New Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          jokeId={props.jokeId}
          onAddComment={addCommentHandler}
        />
      )}
      {!comments[0] && (
        <p className='centered'>
          Unfortunately, there are no comments. Your comment will be first.
          Leave your comment
        </p>
      )}
      <CommentList comments={comments} />
    </section>
  );
};

export default Comments;
