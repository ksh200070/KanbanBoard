import React, { ReactNode, useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  onComplete: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  children?: ReactNode;
}

export default function Input({ onComplete, placeholder, defaultValue, children }: InputProps) {
  const [input, setInput] = useState<string>(defaultValue ?? '');
  const [focusedOn, setFocusedOn] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setFocusedOn(true);
  };

  const handleComplete = () => {
    setFocusedOn(false);
    onComplete(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleComplete();
    }
  };

  return (
    <>
      <div className={styles.container}>
        {children}
        <input
          onFocus={() => setFocusedOn(true)}
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        {focusedOn && (
          <button
            className={`${styles.button} ${!input.length ? styles.inactive : styles.active}`}
            onClick={handleComplete}
          >
            완료
          </button>
        )}
      </div>
    </>
  );
}
