import styles from './Card.module.scss';
import { CardProps } from '@/types/global';

export default function Card({ card }: { card: CardProps }) {
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {card.tags.map((tag) => (
          <div className={styles.tag}>관리자페이지</div>
        ))}
      </div>
      <span className={styles.content}>{card.content}</span>
    </div>
  );
}
