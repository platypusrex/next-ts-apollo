import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { HomePage } from './Component';

storiesOf('HomePage', module)
    .add('Default Page', () => 
        (<HomePage mainText="Lorem Ipsum" cta={{text:"Do Something"}} />)
    )