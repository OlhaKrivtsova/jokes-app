import styles from './CommentList.module.css';
import {Comment} from './Comments';
import CommentItem from './CommentItem';

interface CommentListProps {
  comments: Comment[];
}

const CommentList = (props: CommentListProps) => {
  return (
    <ul className={styles.comments}>
      {props.comments.map(comment => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentList;
