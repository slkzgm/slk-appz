import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import {roundToTwo} from "../lib/utils";

export default function MnlthTable({ data }) {
  const headers = Object.keys(data[0]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((elem, index) => (
              <TableCell key={index}>
                <Typography
                  textAlign={'center'} color={'primary'} fontWeight={'bold'}
                  fontFamily={'monospace'} variant={'body2'} textTransform={'uppercase'}>
                  {elem}
                </Typography>
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
                    <TableCell key={findex} sx={{textAlign: 'center'}}>
                      <Typography variant={'body3'} textTransform={'uppercase'}>
                        {typeof(item[field]) === 'number' ? roundToTwo(item[field]) : item[field]}
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
