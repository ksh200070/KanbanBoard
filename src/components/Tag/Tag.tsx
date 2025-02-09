import styles from './Tag.module.scss';
import { TagProps } from '@/types/global';

export default function Tag({ tag, onClick }: { tag: TagProps; onClick?: () => void }) {
  const getBackgroundColor = () => {
    const color = tag.color ?? '#666';
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.1)`;
  };

  return (
    <div
      className={styles.tag}
      onClick={onClick}
      style={{ backgroundColor: getBackgroundColor(), color: tag.color ?? '#666' }}
    >
      {tag.name}
    </div>
  );
}
