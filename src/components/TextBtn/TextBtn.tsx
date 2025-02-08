import styles from './TextBtn.module.scss';
import { ReactNode } from 'react';

export default function TextBtn({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button className={styles['text-btn']} onClick={onClick}>
      {children}
    </button>
  );
}
