import React from 'react';
import { Container } from 'react-bootstrap';
import { Table } from '../../components/Admin/Table';
import { AddRooms } from '../../components/Admin/addRooms';

export function AdminRooms(){


  const data = React.useMemo(
    () => [
      { bookingDay: 'Friday', bookingTime: '12:00 - 3:30', room: 'ECS 420' },
      { bookingDay: 'Friday', bookingTime: '10:00 - 12:30', room: 'EOS 120' },
      { bookingDay: 'Friday', bookingTime: '11:00 - 2:30', room: 'ELW 210 ' },
      { bookingDay: 'Friday', bookingTime: '10:00 - 12:30', room: 'ECS 110' }
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
        Header: 'Room',
        accessor: 'room',
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
        <h1>Manage Rooms</h1>
      </Container>
      <Container className='d-flex justify-context-center'>
        <AddRooms onAddRow={handleAddRow}/>
      </Container>
      <Container className='d-flex justify-content-center'>
        <Table columns={columns} data={tableData} handleDelete={handleDelete}></Table>
      </Container>
    </>

  );
}