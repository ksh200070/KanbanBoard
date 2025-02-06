import styles from './Main.module.scss';
import rawData from '@data/data.json';
import KanbanList from '@components/KanbanList/KanbanList';
import { Board, KanbanListProps } from '@/types/global';
import { useState } from 'react';

export default function Main() {
  const [data, setData] = useState<Board>(rawData);

  return (
    <div className={styles.body}>
      <input
        className={styles['board-title']}
        defaultValue={data.boardTitle}
        onChange={(e) =>
          setData((prev) => {
            const update = prev;
            update['boardTitle'] = e.target.value;
            return update;
          })
        }
      />
      <section className={styles['list-container']}>
        {data.kanbanList.map((list: KanbanListProps) => (
          <KanbanList key={list.id} list={list} />
        ))}
      </section>
    </div>
  );
}
