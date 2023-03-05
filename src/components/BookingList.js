import React from 'react'
import { BookingRow } from './BookingRow'
import { Table } from 'react-bootstrap'

export function BookingList( bookings ) {
  return (
    <Table className="table-hover">
        <thead>
          <tr>
            <th className="table-head-item">Name</th>

            <th className="table-head-item">Date</th>

            <th className="table-head-item">Club</th>

            <th className="table-head-item">Actions</th>

            <th className="table-head-item" />

            <th/>
            

          </tr>
        </thead>
        <tbody className="table-body">
            {   
                bookings.bookings.map(booking => {
                    console.log(`booking in bookingList: ${JSON.stringify(booking)}`)
                    return <BookingRow id={booking.key} bookings={booking.booking} date={booking.count} club={booking.club} delete={bookings.handleBookingRemove}></BookingRow>
                })
            }
        </tbody>
    </Table>
    
  )
}
