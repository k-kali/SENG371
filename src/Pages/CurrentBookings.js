import React, { useState, useEffect} from 'react'
import {Container, Button, Form} from 'react-bootstrap'
import { BookingList } from '../components/BookingList'

export function CurrentBookings(){
  //Prepare States
  // const [booking, setBooking] = useState('')
  // const [date, setDate] = useState('')
  // const [club, setClub] = useState('')
  const [bookings, setBookings] = useState([])


  useEffect(() => {
    const tempBookings = [{id:'ECS 123', date:'2023-03-22', club:'UVSD'}];
    setBookings(tempBookings);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [])

  useEffect(() => {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) setBookings(JSON.parse(storedBookings))
  }, [])

  function handleBookingRemove(key){
    setBookings(bookings => {
      return [...bookings].filter((booking) => { return booking.key !== key });
    })
  }

  return (
  <>
    &nbsp;
    <h1>Your Current Bookings</h1>
    &nbsp;
    <Container>
      <BookingList bookings={bookings} handleBookingRemove={handleBookingRemove}></BookingList>
    </Container>
  </>
  );
}
