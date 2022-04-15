import * as React from 'react'

import { Token } from '../interfaces'

type ListDetailProps = {
  item: Token
}

const ListDetail = ({ item }: ListDetailProps) => (
  <div>
    <h1>Detail for {item.name}</h1>
    <p>address: {item.address}</p>
  </div>
)

export default ListDetail
