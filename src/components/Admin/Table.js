import React from 'react';
import { useTable, useFilters } from 'react-table';
import { Button } from 'react-bootstrap';

export function Table({ columns, data, handleDelete }){
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setFilter,
      } = useTable(
        {
          columns,
          data,
        },
        useFilters
      );
    
      return (
        <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px black',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    <div>
                      {column.render('Header')}
                      <FilterInput column={column} />
                    </div>
                  </th>
                ))}
                <th style={{
                      borderBottom: 'solid 3px black',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}/>
              </tr>
            ))}
            
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray' }}>
                        {cell.render('Cell')}
                      </td>
                    );
                    
                  })}
                  <Button variant='danger' onClick={() => {
                    handleDelete(row.original)
                  }} >Delete</Button>
                </tr>
              );
            })}
            
          </tbody>
        </table>
      );
}

function FilterInput({ column }) {
    const { filterValue, setFilter } = column;
    return (
      <input
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder={`Search ${column.Header}`}
        style={{ width: '100%', marginBottom: '5px' }}
      />
    );
}