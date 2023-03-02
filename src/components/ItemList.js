import React from 'react'
import { ItemRow } from './ItemRow'
import { Table } from 'react-bootstrap'

export function ItemList( items ) {
  return (
    <Table className="table-hover">
        <thead>
          <tr>
            <th className="table-head-item">UUID</th>

            <th className="table-head-item">Name</th>

            <th className="table-head-item">Count</th>

            <th className="table-head-item" />

            <th/>
            

          </tr>
        </thead>
        <tbody className="table-body">
            {   
                items.items.map(item => {
                    console.log(`item in itemList: ${JSON.stringify(item)}`)
                    return <ItemRow id={item.key} item={item.item} count={item.count} delete={items.handleItemRemove} update={items.handleItemUpdateCount}></ItemRow>
                })
            }
        </tbody>
    </Table>
    
  )
}
