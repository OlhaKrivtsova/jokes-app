import styles from './CommentItem.module.css';

interface CommentItemProps {
  text: string;
}

const CommentItem = (props: CommentItemProps) => {
  return (
    <li className={styles.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
