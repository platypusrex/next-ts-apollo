import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./Button";
import { withKnobs, text} from '@storybook/addon-knobs';

const stories = storiesOf("Button", module)
stories.addDecorator(withKnobs)
stories.add("with text", () => (
    <Button label={text("Button Label", "Hello World")} />
  ))
stories.add("with some emoji", () => (
    <Button label="😀 😎 👍 💯" />
  ));