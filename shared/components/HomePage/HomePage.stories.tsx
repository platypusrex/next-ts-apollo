import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { HomePage } from './Component';
import { withKnobs, text} from '@storybook/addon-knobs';


storiesOf('HomePage', module)
    .addDecorator(withKnobs)
    .add('Default Page', () => 
        (<HomePage mainText="Lorem Ipsum" cta={{text:"Do Something"}} />)
    )
    .add('Dynamic Page', () => {
        const mainText = text("Main Text", 'Lorem Ipsum')
        const cta = text("ctaText", "Do Something")
        return (<HomePage mainText={mainText} cta={{text:cta}} />)
    }
    
)