import styles from './Main.module.scss';
import KanbanList, { KanbanListProps } from '@components/KanbanList/KanbanList';
import { kanbanList } from './../data/data.json';

export default function Main() {
  const data: KanbanListProps[] = kanbanList;

  return (
    <div className={styles.body}>
      <h1>project 1</h1>
      <section className={styles['list-container']}>
        {data.map((list) => (
          <KanbanList
            key={list.id}
            id={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
      </section>
    </div>
  );
}
