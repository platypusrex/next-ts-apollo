import * as React from 'react';
import { Button, ButtonProps } from '../elements-ui/Button';

interface Props {
  title: React.ReactNode;
  cta: ButtonProps;
}

export const HomePage: React.FC<Props> = ({ title, cta }) => (
  <div>
    <div>{title}</div>
    <Button text={cta.text} />
  </div>
);