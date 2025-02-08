import { useState } from 'react';
import styles from './CardDetail.module.scss';
import Tag from '@components/Tag/Tag';
import AddBtn from '@components/AddBtn/AddBtn';
import TextBtn from '@components/TextBtn/TextBtn';
import IconClose from '@/assets/icon-close.svg';
import { CardProps, TagProps } from '@/types/global';

interface CardDetailProps {
  card?: CardProps;
  onSave: (card: CardProps, isCreated?: boolean) => void;
  onClose: () => void;
}

export default function CardDetail({ card, onSave, onClose }: CardDetailProps) {
  const [content, setContent] = useState<string>(card ? card.content : '');

  const saveBtnHandler = () => {
    if (!card) {
      onSave({ id: 0, tags: [], content: content }, true);
    } else {
      const updated = { ...card };
      updated.content = content;
      onSave(updated);
    }
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <button className={styles['close-btn']} onClick={onClose}>
          <img src={IconClose} alt='close icon' />
        </button>
        <section className={styles.option}>
          <div className={styles.tags}>
            {!!card &&
              card.tags.map((tag: TagProps) => (
                <Tag key={tag.name} name={tag.name} color={tag.color} />
              ))}

            <AddBtn />
          </div>
        </section>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder='작업 내용을 작성해주세요'
          defaultValue={content}
        ></textarea>
        <TextBtn onClick={saveBtnHandler}>저장</TextBtn>
      </div>
    </div>
  );
}
