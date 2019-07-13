import React from 'react';
import { User } from '@typings/index';

interface ListDetailProps {
  item: User;
}

export const ListDetail: React.FC<ListDetailProps> = ({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);