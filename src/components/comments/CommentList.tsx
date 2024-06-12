import styles from './CommentList.module.css';
import CommentItem from './CommentItem';
import {IComment} from '../../utils/firebase-api';

interface CommentListProps {
  comments: IComment[];
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
