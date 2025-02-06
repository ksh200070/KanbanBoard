import styles from './Card.module.scss';

export type CardProps = {
  id: number;
  tags: string[];
  content: string;
};

export default function Card({ tags, content }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <div className={styles.tag}>관리자페이지</div>
        ))}
      </div>
      <span className={styles.content}>{content}</span>
    </div>
  );
}
