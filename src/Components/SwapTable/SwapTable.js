import React, { useState } from "react";

// Table Components
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

// Components
import TableHeadComponent from "./TableHeadComponent";
import TableBodyComponents from "./TableBodyComponent";

function createData(_id, firstName, lastName, email) {
  return { _id, firstName, lastName, email };
}

const rows = [
  createData(0, "Saurabh", "Singh", "saurabh@gmail.com"),
  createData(1, "Arpit", "Anand", "arpit@gmail.com"),
  createData(2, "Harsh", "Singh", "harsh@gmail.com"),
  createData(3, "Pawan", "Singh", "pawan@gmail.com"),
  createData(4, "Akash", "Singh", "akash@gmail.com"),
];

export default function DenseTable() {
  const [data, setData] = useState(rows);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHeadComponent />
        <TableBodyComponents data={data} setData={setData} />
      </Table>
    </TableContainer>
  );
}
