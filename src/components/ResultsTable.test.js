import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { ResultsTable} from "./ResultsTable.js";
import { TableHeadItem } from "./ResultsTable.js"
import {render, screen } from '@testing-library/react';
import { FindBookings } from '../Pages/FindBookings.js';
import { Button } from "react-bootstrap";


it("Results table exists", () => {
    render(<FindBookings/>)
    const table = screen.findAllByTestId('results-table');
    expect(table).toBeVisible;
});

it("Results table has items present on load", () => {
    render(<FindBookings/>)
    const element = screen.findAllByTestId('100'); //preloaded data
    expect(element).toBeVisible;
});

// it("Results table has header present on load", () => {
//     render(<FindBookings/>)
//     const element = screen.findAllByTestId('list-header'); //preloaded data
//     expect(element).toBeVisible;
//     expect(element).toBeInstanceOf(<TableHeadItem/>);
// });


