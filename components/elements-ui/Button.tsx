import * as React from 'react';
export interface IButtonProps {
  label: String
  onClick?: (e:any) => void
}
const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};
const Button: React.SFC<IButtonProps> = (props) => (
  <button onClick={props.onClick} style={styles} type="button">
    {props.label}
  </button>
);
Button.defaultProps = {
  label: "Default Label",
  onClick: () => {}
};
export default Button;