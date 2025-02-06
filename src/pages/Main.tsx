import styles from './Main.module.scss';
import rawData from '@data/data.json';
import KanbanList from '@components/KanbanList/KanbanList';
import { Board, KanbanListProps } from '@/types/global';

export default function Main() {
  const data: Board = rawData;

  return (
    <div className={styles.body}>
      <h1 className={styles['board-title']}>{data.boardTitle}</h1>
      <section className={styles['list-container']}>
        {data.kanbanList.map((list: KanbanListProps) => (
          <KanbanList key={list.id} list={list} />
        ))}
      </section>
    </div>
  );
}
