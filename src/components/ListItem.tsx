import * as React from 'react';
import Link from 'next/link';
import { User } from '@typings/index';

interface Props {
  data: User;
}

export const ListItem: React.FC<Props> = ({ data }) => (
  <Link href={`/detail?id=${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);