import ImgLogo from '@/assets/img-logo.svg';
import IconArrowDown from '@/assets/icon-arrow-down.svg';
import IconUser from '@/assets/icon-user.png';
import styles from './Header.module.scss';

export default function Header() {
  const userName = '김승현';

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['logo']}>
          <img src={ImgLogo} alt='btheegg logo image' />
        </div>
        <div className={styles['mypage']}>
          <div className={styles['profile-img']}>
            <img src={IconUser} alt='' />
          </div>
          <span className={styles.name}>{userName}님</span>
          <button className={styles['dropdown-arrow']}>
            <img src={IconArrowDown} alt='' />
          </button>
        </div>
      </div>
    </>
  );
}
