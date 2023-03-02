import React, { useState } from 'react'
import { Button } from 'react-bootstrap';




export function ItemRow( item ) {

    return (
        <tr className="table-row sm-3">
            <td className='table-item'>
                {item.id}
            </td>
            <td className="table-item sm-3">
                {item.item}
            </td>
        
            <td className="table-item text-nowrap sm-3">
                {item.count}
            </td>
            <td className="table-item">
                <Button className="btn-sm" onClick={() => {item.update(item.id, Number(item.count)+1)}}>+</Button>
                <Button className="btn-sm" onClick={() => {item.update(item.id, Number(item.count)-1)}}>-</Button>
            </td>
            <td className="table-item">
                <Button className="btn-danger" onClick={() => {item.delete(item.id)}}>Delete</Button>
            </td>
        </tr>
    )
}
