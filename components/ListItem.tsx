import React from 'react'
import Link from 'next/link'

import { Token } from '../interfaces'

type Props = {
  data: Token
}

const ListItem = ({ data }: Props) => (
  <Link href="/tokens/[id]" as={`/tokens/${data.address}`}>
    <a>
      {data.name}: {data.address}
    </a>
  </Link>
)

export default ListItem
