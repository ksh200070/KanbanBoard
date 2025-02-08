import { TagProps } from '@/types/global';
import styles from './Tag.module.scss';

export default function Tag({ name, color = '#666' }: TagProps) {
  const getBackgroundColor = () => {
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.1)`;
  };

  return (
    <div className={styles.tag} style={{ backgroundColor: getBackgroundColor(), color: color }}>
      {name}
    </div>
  );
}
