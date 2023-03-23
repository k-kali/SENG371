import React from 'react';
import { Container } from 'react-bootstrap';
import { Table } from '../../components/Admin/Table';
import { AddBooking } from '../../components/Admin/AddBooking'

export function AdminBookings(){


  const data = React.useMemo(
    () => [
      { bookingDay: 'Tuesday', bookingTime: '12:00 - 3:30', clubName: 'Shell Club', bookedThing: 'ECS 420' },
      { bookingDay: 'Wednesday', bookingTime: '10:00 - 12:30', clubName: 'Money Laundering Club', bookedThing: 'EOS 120' },
      { bookingDay: 'Thursday', bookingTime: '11:00 - 2:30', clubName: 'Crack Club', bookedThing: 'ELW 210 ' },
      { bookingDay: 'Monday', bookingTime: '10:00 - 12:30', clubName: 'Swag Club', bookedThing: 'ECS 110' }
      // ...more data
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: 'Booking Day',
        accessor: 'bookingDay', 
      },
      {
        Header: 'Booking Time',
        accessor: 'bookingTime',
      },
      {
        Header: 'Club Name',
        accessor: 'clubName',
      },
      {
        Header: 'Booked Room/Item',
        accessor: 'bookedThing',
      },
    ],
    []
  );

  const [tableData, setTableData] = React.useState(data);

  function handleDelete(rowData){
    setTableData(tableData.filter((item) => item !== rowData));
  };

  function handleAddRow(newRow){
    setTableData([...tableData, newRow]);
  };

  return (
    <>    
      <Container className='d-flex justify-content-center'>
        <h1>Manage Bookings</h1>
      </Container>
      <Container className='d-flex justify-context-center'>
        <AddBooking onAddRow={handleAddRow}/>
      </Container>
      <Container className='d-flex justify-content-center'>
        <Table columns={columns} data={tableData} handleDelete={handleDelete}></Table>
      </Container>
    </>

  );
}