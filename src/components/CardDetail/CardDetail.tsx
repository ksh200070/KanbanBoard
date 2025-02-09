import { useState } from 'react';
import styles from './CardDetail.module.scss';
import Tag from '@components/Tag/Tag';
import TextBtn from '@components/TextBtn/TextBtn';
import IconClose from '@/assets/icon-close.svg';
import { CardProps, TagProps } from '@/types/global';

interface CardDetailProps {
  card?: CardProps;
  onSave: (card: CardProps, isCreated?: boolean) => void;
  onClose: () => void;
}

export default function CardDetail({ card, onSave, onClose }: CardDetailProps) {
  const [tags, setTags] = useState<TagProps[]>(card ? card.tags : []);
  const [content, setContent] = useState<string>(card ? card.content : '');
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');

  const saveBtnHandler = () => {
    if (!card) {
      onSave({ id: 0, tags: tags, content: content }, true);
    } else {
      const updated = { ...card };
      updated.content = content;
      updated.tags = tags;
      onSave(updated);
    }
  };

  const deleteTagHandler = (tagName: string) => {
    setTags((prev: TagProps[]) => [...prev].filter((tag: TagProps) => tag.name !== tagName));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      setTags((prev: TagProps[]) => [...prev, { name: newTagInput }]);
      setIsAddingTag(false);
      setNewTagInput(() => '');
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
            {tags.map((tag: TagProps) => (
              <Tag key={tag.name} tag={tag} onClick={() => deleteTagHandler(tag.name)} />
            ))}

            <div className={styles['new-tag']}>
              <input
                type='text'
                placeholder='태그를 입력하세요'
                value={newTagInput}
                onChange={(e) => setNewTagInput(e.target.value)}
                onFocus={() => setIsAddingTag(true)}
                onBlur={() => setIsAddingTag(false)}
                onKeyDown={handleKeyDown}
              />
              {isAddingTag && (
                <div className={styles.tooltip}>
                  쉼표 혹은 엔터를 입력하여 태그를 등록할 수 있습니다. <br />
                  등록된 태그를 클릭하면 삭제됩니다.
                </div>
              )}
            </div>
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
