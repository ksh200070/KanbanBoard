import styles from './EmptyCard.module.scss';
import AddBtn from '@components/AddBtn/AddBtn';

export default function EmptyCard({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <span className={styles.comment}>지금 바로 추가해보세요</span>
      <AddBtn />
    </div>
  );
}
