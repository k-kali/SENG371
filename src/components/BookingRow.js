import React, { useState } from 'react'
import { Button } from 'react-bootstrap';


export function BookingRow( booking ) {

    return (
        <tr className="table-row sm-3">
            <td className='table-item'>
                <div className='d-flex align-items-center'>
                    <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded'
                    />
                    <div className='sm-3'>
                        {booking.id}
                    </div>
                </div>
            </td>
            <td className="table-item text-nowrap sm-3">
                {booking.date}
            </td>
        
            <td className="table-item sm-3">
                {booking.club}
            </td>
            <td className="table-item">
                <Button className="btn-danger" onClick={() => {booking.delete(booking.id)}}>Delete</Button>
            </td>
        </tr>
    )
}