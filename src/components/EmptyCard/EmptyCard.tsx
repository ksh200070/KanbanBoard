import styles from './EmptyCard.module.scss';
import AddBtn from '../AddBtn/AddBtn';

export default function EmptyCard() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.comment}>지금 바로 추가해보세요</span>
        <AddBtn />
      </div>
    </>
  );
}
