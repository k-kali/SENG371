import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import React from 'react'

export function AddEquipment({onAddRow}) {
    const [equipmentName, setEquipmentName] = React.useState('')
    const [quantity, setQuantity] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddRow({equipmentName, 'quantity': parseInt(quantity)});
        setEquipmentName('')
        setQuantity('')
    }

    return (
        <Container className='d-flex justify-content-center' style={{ paddingBottom: '30px' }}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Equipment Name"
                    value={equipmentName}
                    onChange={(e) => setEquipmentName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Quantity Available"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
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