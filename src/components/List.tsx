import React from 'react';
import { ListItem } from '@components/ListItem';
import { User } from '@typings/index';

interface Props {
  items: User[];
}

export const List: React.FC<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);