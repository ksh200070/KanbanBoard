import Card, { CardProps } from '../Card/Card';
import EmptyCard from '@components/EmptyCard/EmptyCard';
import styles from './KanbanList.module.scss';
import AddBtn from '../AddBtn/AddBtn';

export type KanbanListProps = {
  id: number;
  title: string;
  cards: CardProps[];
};

export default function KanbanList({ id, title, cards }: KanbanListProps) {
  return (
    <>
      {!cards.length ? (
        <div className={styles.container}>
          <span className={styles.title}>{title}</span>
          <EmptyCard />
        </div>
      ) : (
        <div className={styles.container}>
          <section className={styles['list-info']}>
            <div className={styles.info}>
              <span className={styles.title}>{title}</span>
              <span className={styles.count}>{cards.length}</span>
            </div>
            <AddBtn />
          </section>
          <section className={styles['list-detail']}>
            {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                tags={card.tags}
                content={card.content}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
