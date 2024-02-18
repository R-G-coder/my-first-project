import { useState } from "react";
import "./App.css";
import Logo from './logo.png';
import searchIcon from "./searchIcon.png";

function ViewTable({ records }) {
  const [filterText, setFilterText] = useState("");

  return (
    <>
      <Navbar />
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <AttendanceTable records={records} filterText={filterText} />
    </>
  );
}

function AttendanceRow({ attendanceRecord }) {
  return (
    <tr>
      <td class="py-4 px-6 border-b border-gray-200">{attendanceRecord.date}</td>
      <td class="py-4 px-6 border-b border-gray-200">{attendanceRecord.TimeIn}</td>
      <td class="py-4 px-6 border-b border-gray-200">{attendanceRecord.TimeOut}</td>
    </tr>
  );
}

function AttendanceTable({ records, filterText }) {
  const rows = [];

  records.forEach((record) => {
    if (record.date.indexOf(filterText) === -1) return;

    rows.push(<AttendanceRow attendanceRecord={record} />);
  });

  return (
    <table class="max-w-auto min-w-full divide-y divide-gray-200 pt-8">
      <thead>
        <tr>
          <th class="py-3 px-6 text-left bg-gray-100">Date</th>
          <th class="py-3 px-6 text-left bg-gray-100">Time In</th>
          <th class="py-3 px-6 text-left bg-gray-100">Time Out</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProfileDisplay() {
  return (
    <>
      <h1 class="p-4">Name</h1>
    </>
  );
}


function Navbar() {
  return (
    <div class="flex justify-between justify-center p-4">
      <div class="p-4">
        <img src={Logo} class="w-8 h-8 text-blue-500 hover:text-blue-700 cursor-pointer"></img>
      </div>
      <div class="flex pr-4">
        <a class="p-4">Home</a>
        <a class="p-4">Profile</a>
        <ProfileDisplay />
      </div>
    </div>
  );
}
function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <>
      <div class="pl-4 pb-2">
        <img src={searchIcon} class="w-8 h-8 text-blue-500 hover:text-blue-700 cursor-pointer"></img>
      </div>
      <div class="pl-4 pb-8">
        <input
          type="text"
          class="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
          onChange={(e) => {
            onFilterTextChange(e.target.value);
          }}
          value={filterText}
        />
      </div>
    </>
  );
}

const attendanceRecords = [
  { date: "12/02/2024", TimeIn: "10:00 pm", TimeOut: "7:00 pm" },
  { date: "13/02/2024", TimeIn: "10:15 am", TimeOut: "6:30 pm" },
  { date: "14/02/2024", TimeIn: "10:00 am", TimeOut: "6:45 pm" },
  { date: "15/02/2024", TimeIn: "10:45 am", TimeOut: "6:45 pm" },
];

function App() {
  return <ViewTable records={attendanceRecords} />;
}

export default App;
