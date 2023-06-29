import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import CloneCard from './CloneCard';
import {Grid} from "@mui/material";

const PER_PAGE = 12;

const PaginatedCloneList = ({ clones }) => {
    const [page, setPage] = useState(1);
    const count = Math.ceil(clones.length / PER_PAGE);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                {
                    clones.slice((page - 1) * PER_PAGE, page * PER_PAGE).map((clone, index) => (
                        <Grid item xs={12} sm={6} md={4} key={clone.cloneId}>
                            <CloneCard cloneId={clone.cloneId} />
                        </Grid>
                    ))
                }
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Pagination count={count} page={page} onChange={handleChange} />
            </Box>
        </Box>
    );
}

export default PaginatedCloneList;
