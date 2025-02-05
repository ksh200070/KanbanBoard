import styles from './AddBtn.module.scss';
import IconPlus from '@/assets/icon-plus.svg';

export default function AddBtn() {
  return (
    <button className={styles['add-btn']}>
      <img src={IconPlus} alt='plus icon' />
    </button>
  );
}
