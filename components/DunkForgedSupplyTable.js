import {Avatar, Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import React from "react";

export default function ForgedSupplyTable({ forgedSupply, updateDunkForgeDetails }) {
    return (
        <Box sx={{ margin: '.5rem', textAlign: 'center', paddingTop: '1rem' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            <Typography variant={'h6'} color={'primary'}>Actual Supply Minted</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align={"center"} style={{ verticalAlign: 'middle' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Avatar src="https://pbs.twimg.com/media/F8p1DzEWsAET0lF?format=jpg&name=large" alt="OG Image" style={{ width: 60, height: 60 }}/>
                                <Typography marginTop={'1rem'}>OG</Typography>
                            </div>
                        </TableCell>
                        <TableCell align={"center"} style={{ verticalAlign: 'middle' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Avatar src="https://pbs.twimg.com/media/F8p1JlgXQAQWcE9?format=jpg&name=large" alt="X Image" style={{ width: 60, height: 60 }}/>
                                <Typography marginTop={'1rem'}>X</Typography>
                            </div>
                        </TableCell>
                        <TableCell align={"center"} style={{ verticalAlign: 'middle' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Avatar src="https://pbs.twimg.com/media/F8p1L7bXcAAUSGy?format=jpg&name=large" alt="V Image" style={{ width: 60, height: 60 }}/>
                                <Typography marginTop={'1rem'}>VOID</Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"}>{forgedSupply.og}</TableCell>
                        <TableCell align={"center"}>{forgedSupply.x}</TableCell>
                        <TableCell align={"center"}>{forgedSupply.v}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} colSpan={3}>
                            <Typography variant={'h6'} color={'primary'}>
                                Total Forged Supply: {forgedSupply.total}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button variant="contained" color="primary" onClick={updateDunkForgeDetails} style={{ marginTop: '1rem' }}>
                Update
            </Button>
        </Box>
    );
}
