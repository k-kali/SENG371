import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import React from 'react'

export function AddRooms({onAddRow}) {
    const [bookingDay, setBookingDay] = React.useState('')
    const [bookingTime, setbookingTime] = React.useState('')
    const [room, setRoom] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddRow({bookingDay, bookingTime, room});
        setBookingDay('')
        setbookingTime('')
        setRoom('')

    
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
                    placeholder="Room Booked"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                  />
                </Col>
                <Col>
                  <Button type="submit">Add Room</Button>
                </Col>
              </Row>
            </Form>
        </Container>
      );

}