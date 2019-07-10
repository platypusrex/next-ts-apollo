import * as React from 'react'
import { Button } from '../elements-ui/Button';

type Props = {
  mainText: String,
  cta: {
    text: String
  }
}

export const List: React.FunctionComponent<Props> = ({ mainText, cta }) => (
  <div>
    {mainText}
    <Button label={cta.text} />
  </div>
)