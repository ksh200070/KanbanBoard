import styles from './Main.module.scss';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import KanbanList from '@components/KanbanList/KanbanList';
import { Board, KanbanListProps } from '@/types/global';
import rawData from '@data/data.json';

export default function Main() {
  const [data, setData] = useState<Board>(rawData);

  const updateListIndex = () => {
    return data.kanbanList.length + 1;
  };

  const addListHandler = (inputValue: string) => {
    setData((prev: Board) => {
      const updated = { ...prev };
      updated.kanbanList.push({ id: updateListIndex(), listTitle: inputValue, cards: [] });
      return updated;
    });
  };

  const deleteListHandler = (listId: number) => {
    setData((prev: Board) => {
      const updated = { ...prev };
      const updatedList = updated.kanbanList.filter((list: KanbanListProps) => list.id !== listId);
      return { id: updated.id, boardTitle: updated.boardTitle, kanbanList: updatedList };
    });
  };

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
          <KanbanList
            key={list.id}
            list={list}
            onDelete={(listId: number) => deleteListHandler(listId)}
          />
        ))}

        <Input
          onComplete={(inputValue) => addListHandler(inputValue)}
          placeholder='Add another list'
        >
          +
        </Input>
      </section>
    </div>
  );
}
