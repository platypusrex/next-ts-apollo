import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { Link, LinkSize, LinkType } from './';
import { themeColors, themeFont } from '@styled/theme';

const linkStories = storiesOf('Link', module);
const linkSizeStories = storiesOf('Link/size', module);
const linkTypeStories = storiesOf('Link/type', module);

linkStories.addDecorator(withKnobs);

linkStories.add('default', () => {
  const size = select('size', themeFont.size, themeFont.size.default);
  const type = select('type', themeColors, themeColors.main);
  const sizeValue = Object.keys(themeFont.size)
    .find(key => themeFont.size[key as LinkSize] === size) as LinkSize;
  const typeValue = Object.keys(themeColors)
    .find(key => themeColors[key as LinkType] === type) as LinkType;

  return (
    <Link href={text('href', '/')} size={sizeValue} type={typeValue}>
      {text('text', `Link Text`)}
    </Link>
  );
});

Object.keys(themeFont.size).forEach(key => {
  linkSizeStories.add(key, () => (
    <Link href={text('href', '/')} size={key as LinkSize}>
      {text('text', `Link Text`)}
    </Link>
  ));
});

Object.keys(themeColors).forEach(key => {
  linkTypeStories.add(key, () => (
    <Link href={text('href', '/')} size={key as LinkSize} type={key as LinkType}>
      {text('text', `Link Text`)}
    </Link>
  ));
});