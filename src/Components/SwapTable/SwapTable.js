import React, { useEffect, useState } from "react";

// Table Components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Icons
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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

  const handelChange = (rowData, upFlag) => {
    let dataChange = data;
    let currentDataIndex = dataChange.findIndex((data) => data === rowData);
    if (upFlag) {
      let temp = dataChange[currentDataIndex];
      dataChange[currentDataIndex] = dataChange[currentDataIndex - 1];
      dataChange[currentDataIndex - 1] = temp;
    } else {
      let temp = dataChange[currentDataIndex];
      dataChange[currentDataIndex] = dataChange[currentDataIndex + 1];
      dataChange[currentDataIndex + 1] = temp;
    }
    setData([...dataChange]);
    console.log("working");
    console.log(data);
  };

  const dataRow = () => {
    return data.map((row) => (
      <TableRow
        key={row._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={() => handelChange(row, true)}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </TableCell>
        <TableCell align="right">{row.firstName}</TableCell>
        <TableCell align="right">{row.lastName}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={() => handelChange(row, false)}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{dataRow()}</TableBody>
      </Table>
    </TableContainer>
  );
}
