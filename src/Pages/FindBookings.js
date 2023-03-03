import React from "react";
import { Table } from "react-bootstrap";
import ResultsTable from "../components/ResultsTable";
import ResultsData from "../data/Resources.json";

export function FindBookings() {
  const column = [
    { heading: "Resource", value: "type" },
    { heading: "Date", value: "date" },
    { heading: "Day", value: "day" },
    { heading: "Time", value: "time" },
  ];

  return (
    <div>
      <h1>Search for Bookings</h1>
      <input className="form-control" type="text" placeholder="search" />
      <br></br>
      <h4>Filter by keyword:</h4>
      <input className="form-control" type="text" />
      <div>
        <ResultsTable data={ResultsData} column={column} />
      </div>
    </div>
  );
}
