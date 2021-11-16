// import { AgGridReact } from "ag-grid-react";
// import '@ag-grid-community/all-modules/styles/ag-grid.css';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Box } from "@mui/material";

const AGrid = () => {
  const RowData01 = [
    { employee: "Josh Finch", sickDays: 4 },
    { employee: "Flavia Mccloskey", sickDays: 1 },
    { employee: "Marine Creason", sickDays: 8 },
    { employee: "Carey Livingstone", sickDays: 2 },
    { employee: "Brande Giorgi", sickDays: 5 },
    { employee: "Beatrice Kugler", sickDays: 3 },
    { employee: "Elvia Macko", sickDays: 7 },
    { employee: "Santiago Little", sickDays: 1 },
    { employee: "Mary Clifton", sickDays: 2 },
    { employee: "Norris Iniguez", sickDays: 1 },
    { employee: "Shellie Umland", sickDays: 5 },
    { employee: "Kristi Nawrocki", sickDays: 2 },
    { employee: "Elliot Malo", sickDays: 3 },
    { employee: "Paul Switzer", sickDays: 11 },
    { employee: "Lilly Boaz", sickDays: 6 },
    { employee: "Frank Kimura", sickDays: 1 },
    { employee: "Alena Wages", sickDays: 5 },
  ];

  var gridOptions = {
    RowData01: RowData01,
    columnDefs01: [
      {
        headerName: "Employee",
        field: "employee",
      },
      {
        headerName: "Number Sick Days",
        field: "sickDays",
      },
    ],
  };

  const rowData1 = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 40000 },
  ];

  const rowData2 = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 40000 },
  ];

  const [rowdata2, setRowdata2] = useState(rowData2);

useEffect(() => {
    axios.get(`https://www.ag-grid.com/example-assets/row-data.json`)
    .then(response => {
        //console.log(response.data);
        setRowdata2(response.data);
    })
}, [])

  return (
    <Box>
    <div>
      <div
        className="ag-theme-balham"
        style={{
          height: 500,
          width: 880,
        }}
      >
        <AgGridReact
          columnDefs={gridOptions.columnDefs01}
          rowData={gridOptions.RowData01}
        ></AgGridReact>
      </div>
      <div
        className="ag-theme-alpine"
        style={{
          height: 500,
          width: 880,
        }}
      >
        <AgGridReact rowData={rowData1}>
          <AgGridColumn field="make" sortable={true}></AgGridColumn>
          <AgGridColumn field="model" filter={true}></AgGridColumn>
          <AgGridColumn field="price" editable={true}></AgGridColumn>
        </AgGridReact>
      </div>
      <div
        className="ag-theme-alpine"
        style={{
          height: 500,
          width: 880,
        }}
      >
        <AgGridReact defaultColDef={{sortable:true, filter:true}} pagination={true} rowData={rowdata2}>
          <AgGridColumn field="make"></AgGridColumn>
          <AgGridColumn field="model"></AgGridColumn>
          <AgGridColumn field="price" editable={true}></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
    </Box>
  );
};

export default AGrid;
