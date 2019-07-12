import React, { MouseEvent } from 'react';

export interface ButtonProps {
  text: String;
  onClick?: (e: MouseEvent) => void;
}
const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick} style={styles} type="button">
    {text}
  </button>
);