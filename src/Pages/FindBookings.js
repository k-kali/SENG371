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
      <h1>Find Bookings</h1>
      <h2>Filter</h2>
      <text>filters here</text>
      <div>
        <ResultsTable data={ResultsData} column={column} />
      </div>
    </div>
  );
}
