import * as React from 'react'
import Link from 'next/link'

import { User } from '../types'

type Props = {
  data: User
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href={`/detail?id=${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
