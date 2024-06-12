import styles from './Comments.module.css';
import CommentList from './CommentList';
import {useState, useCallback, useEffect} from 'react';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import {getComments, IComment} from '../../utils/firebase-api';

interface CommentsProps {
  jokeId: string;
}

const Comments = (props: CommentsProps) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const {
    sendHttpRequest,
    status,
    data: comments,
    error,
  } = useHttp<IComment[]>(getComments, true);

  useEffect(() => {
    sendHttpRequest(props.jokeId);
  }, [sendHttpRequest, props.jokeId, isAddingComment]);

  const addCommentHandler = useCallback(() => {
    setIsAddingComment(false);
  }, []);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  if (status === 'pending') {
    return (
      <div className='centered'>
        <p className='focused'>Loading...</p>
      </div>
    );
  }

  if (error || !comments) {
    return (
      <div className='centered'>
        <p className='focused'>{error}</p>
      </div>
    );
  }

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
