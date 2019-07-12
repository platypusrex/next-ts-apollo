import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button } from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('with text', () => (
  <Button text={text('Button Label', 'Hello World')}/>
));

stories.add('with some emoji', () => (
  <Button text="😀 😎 👍 💯"/>
));