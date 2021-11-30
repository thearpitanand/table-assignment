// Table Components
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

// Icons
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const TableBodyComponents = ({ data, setData }) => {
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
  };
  return data.map((row, index) => (
    <TableBody>
      <TableRow
        key={row._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {!(index === 0) && (
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={() => handelChange(row, true)}
            >
              <ArrowUpwardIcon />
            </IconButton>
          )}
        </TableCell>
        <TableCell align="right">{row.firstName}</TableCell>
        <TableCell align="right">{row.lastName}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">
          {!(index === data.length - 1) && (
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={() => handelChange(row, false)}
            >
              <ArrowDownwardIcon />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  ));
};

export default TableBodyComponents;
