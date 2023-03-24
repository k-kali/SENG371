import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import React from 'react'

export function AddBooking({onAddRow}) {
    const [bookingDay, setBookingDay] = React.useState('')
    const [bookingTime, setbookingTime] = React.useState('')
    const [clubName, setClubName] = React.useState('')
    const [bookedThing, setBookedThing] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddRow({bookingDay, bookingTime, clubName, bookedThing});
        setBookingDay('')
        setbookingTime('')
        setClubName('')
        setBookedThing('')

    
    }

    return (
        <Container className='d-flex justify-content-center' style={{ paddingBottom: '30px' }}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Booking Day"
                    value={bookingDay}
                    onChange={(e) => setBookingDay(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Booking Time"
                    value={bookingTime}
                    onChange={(e) => setbookingTime(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Club Name"
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Item/Room Booked"
                    value={bookedThing}
                    onChange={(e) => setBookedThing(e.target.value)}
                  />
                </Col>
                <Col>
                  <Button type="submit">Add Booking</Button>
                </Col>
              </Row>
            </Form>
        </Container>
      );

}