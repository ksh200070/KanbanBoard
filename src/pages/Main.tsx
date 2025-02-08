import styles from './Main.module.scss';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import KanbanList from '@components/KanbanList/KanbanList';
import CardDetail from '@components/CardDetail/CardDetail';
import { Board, CardProps, KanbanListProps } from '@/types/global';
import rawData from '@data/data.json';

export default function Main() {
  const [data, setData] = useState<Board>(rawData);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps | undefined>(undefined);
  const [selectedCardListIdx, setSelectedCardListIdx] = useState<number | undefined>(undefined);

  const updateIndex = (target: 'list' | 'card') => {
    if (target === 'list') {
      return data.kanbanList.length + 1;
    }

    if (target === 'card' && selectedCardListIdx) {
      const findList = data.kanbanList.find(
        (list: KanbanListProps) => list.id === selectedCardListIdx,
      );
      if (findList) {
        return findList.cards.length + 1;
      }
    }
  };

  const addListHandler = (inputValue: string) => {
    setData((prev: Board) => {
      const updated = { ...prev };
      updated.kanbanList.push({
        id: updateIndex('list') as number,
        listTitle: inputValue,
        cards: [],
      });
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

  const deleteCardHandler = (listId: number, cardId: number) => {
    setData((prev: Board) => {
      const updated = { ...prev };
      const updatedList = updated.kanbanList.map((list: KanbanListProps) => {
        if (list.id === listId) {
          return {
            id: list.id,
            listTitle: list.listTitle,
            isFixed: list.isFixed,
            cards: list.cards.filter((card: CardProps) => card.id !== cardId),
          };
        } else {
          return list;
        }
      });
      return { id: updated.id, boardTitle: updated.boardTitle, kanbanList: updatedList };
    });
  };

  const clickCardHandler = (listId?: number, card?: CardProps) => {
    setIsCardSelected((prev) => !prev);
    setSelectedCard(card);
    setSelectedCardListIdx(listId);
  };

  const closeCardDetailHandler = () => {
    setIsCardSelected((prev) => !prev);
    setSelectedCard(undefined);
  };

  const saveCardDetailHandler = (editCard: CardProps, isCreated?: boolean) => {
    if (isCreated) {
      setData((prev: Board) => {
        const updated = { ...prev };
        const updatedList = updated.kanbanList.map((list: KanbanListProps) => {
          if (list.id === selectedCardListIdx) {
            list.cards.push({
              id: updateIndex('card') as number,
              tags: editCard.tags,
              content: editCard.content,
            });
          }

          return list;
        });

        return {
          id: updateIndex('card') as number,
          boardTitle: updated.boardTitle,
          kanbanList: updatedList,
        };
      });
    } else {
      if (!!selectedCard && !!selectedCardListIdx) {
        setData((prev: Board) => {
          const updated = { ...prev };
          const updatedList = updated.kanbanList.map((list: KanbanListProps) => {
            if (list.id === selectedCardListIdx) {
              const updatedCards = list.cards.map((card: CardProps) =>
                card.id === editCard.id ? editCard : card,
              );

              return {
                id: list.id,
                listTitle: list.listTitle,
                cards: updatedCards,
                isFixed: list.isFixed,
              };
            } else {
              return list;
            }
          });

          return { id: updated.id, boardTitle: updated.boardTitle, kanbanList: updatedList };
        });
      }
    }
    closeCardDetailHandler();
  };

  return (
    <>
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
              onDeleteCard={(listId: number, cardId: number) => deleteCardHandler(listId, cardId)}
              onClickCard={(listId?: number, card?: CardProps) => clickCardHandler(listId, card)}
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

      {!!isCardSelected && (
        <CardDetail
          card={selectedCard}
          onSave={(card: CardProps, isCreated?: boolean) => saveCardDetailHandler(card, isCreated)}
          onClose={closeCardDetailHandler}
        />
      )}
    </>
  );
}
