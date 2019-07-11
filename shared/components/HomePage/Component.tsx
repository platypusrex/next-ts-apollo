import * as React from 'react';
import Button from '../elements-ui/Button';

type Props = {
  mainText: String,
  cta: {
    text: String
  }
}

export const HomePage: React.FunctionComponent<Props> = ({ mainText, cta }) => (
  <div>
    <div>{mainText}</div>
    <Button label={cta.text} />
  </div>
);