import styles from './AddBtn.module.scss';
import IconPlus from '@/assets/icon-plus.svg';

export default function AddBtn({ onClick }: { onClick?: () => void }) {
  return (
    <button className={styles['add-btn']} onClick={onClick}>
      <img src={IconPlus} alt='plus icon' />
    </button>
  );
}
