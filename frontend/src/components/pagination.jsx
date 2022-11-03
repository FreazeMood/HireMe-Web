import React from 'react';
import { Pagination } from '@mui/material';
import { Stack } from '@mui/material';

const Pages = (count) => {
    return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack>
    )
} 

export default Pages;