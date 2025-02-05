import Card from '@components/Card/Card';
import EmptyCard from '@components/EmptyCard/EmptyCard';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <div className={styles.body}>
      <EmptyCard />
      <Card
        tags={['관리자페이지']}
        content='회원을 블랙리스트로 지정할 수 있는 기능을 제작합니다.'
      />
    </div>
  );
}
