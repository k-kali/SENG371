import React from 'react';
import { useTable, useFilters } from 'react-table';
import { FilterInput } from '../FilterInput';
import { Button } from 'react-bootstrap';


export function Table({ columns, data, handleDelete, buttonVariant, buttonText }){
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
                      <td
                        {...cell.getCellProps()}
                        style={{ padding: '10px', border: 'solid 1px gray' }}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                  <Button variant={buttonVariant} onClick={() => {handleDelete(row.original)}}>{buttonText}</Button>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
}