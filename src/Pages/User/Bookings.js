import React from 'react';
import { Container } from 'react-bootstrap';
import { Table } from '../../components/User/Table';

export function UserBookings(){


  const data = React.useMemo(
    () => [
      { bookingDay: 'Wednesday', bookingTime: '12:00 - 3:30',  bookedThing: 'ECS 420' },
      { bookingDay: 'Wednesday', bookingTime: '12:00 - 3:30',  bookedThing: 'Chair' },
      { bookingDay: 'Wednesday', bookingTime: '12:00 - 3:30',  bookedThing: 'Chair' },
      { bookingDay: 'Wednesday', bookingTime: '12:00 - 3:30',  bookedThing: 'Chair' },
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

  return (
    <>    
      <Container className='d-flex justify-content-center'>
        <h1>Manage Club Bookings</h1>
      </Container>
      <Container className='d-flex justify-content-center'>
        <Table columns={columns} data={tableData} handleDelete={handleDelete} buttonVariant='danger' buttonText='Delete' ></Table>
      </Container>
    </>

  );
}