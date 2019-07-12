import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { HomePage } from './Component';

storiesOf('HomePage', module)
  .addDecorator(withKnobs)
  .add('Default Page', () =>
      (<HomePage title="Lorem Ipsum" cta={{text: 'Do Something'}} />)
  )
  .add('Dynamic Page', () => {
      const title = text('Title', 'Lorem Ipsum');
      const cta = text('CTA Text', 'Do Something');
      return (<HomePage title={title} cta={{ text: cta }} />);
  }
);