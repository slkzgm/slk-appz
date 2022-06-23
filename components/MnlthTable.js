import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

export default function MnlthTable({ data }) {
  const headers = Object.keys(data[0]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((elem, index) => (
              <TableCell key={index}>
                {elem}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((item, index) => item[headers[0]] ? (
              <TableRow key={index}>
                {
                  headers.map((field, findex) => (
                    <TableCell key={findex}>
                    <Typography noWrap>
                      {item[field]}
                    </Typography>
                    </TableCell>
                  ))
                }
              </TableRow>
            ) : '')
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
