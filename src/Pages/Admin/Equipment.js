import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Table } from '../../components/Admin/Table';
import { AddEquipment } from '../../components/Admin/AddEquipment'

export function AdminEquipment(){

  const data = React.useMemo(
    () => [
      { equipmentName: 'Ball', quantity: 28 },
      { equipmentName: 'Chair', quantity: 26 },
      // ...more data
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: 'Equipment',
        accessor: 'equipmentName', 
      },
      {
        Header: 'Amount Remaining',
        accessor: 'quantity',
      }
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
        <h1>Manage Equipment Table</h1>
      </Container>
      <Container className='d-flex justify-context-center'>
        <AddEquipment onAddRow={handleAddRow}/>
      </Container>
      <Container className='d-flex justify-content-center'>
        <Table columns={columns} data={tableData} handleDelete={handleDelete}></Table>
      </Container>
    </>

  );
}