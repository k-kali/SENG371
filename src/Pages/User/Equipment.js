import React from 'react';
import { Container } from 'react-bootstrap';
import { Table } from '../../components/User/Table';

export function UserEquipment(){


  const data = React.useMemo(
    () => [
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
        Header: 'Item',
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
        <h1>Manage Equipment Table</h1>
      </Container>
      <Container className='d-flex justify-content-center'>
        <Table columns={columns} data={tableData} handleDelete={handleDelete} buttonVariant='primary' buttonText='Book Equipment' ></Table>
      </Container>
    </>

  );
}