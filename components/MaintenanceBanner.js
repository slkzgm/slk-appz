import React from 'react';
import { Box, Typography } from '@mui/material';

const MaintenanceBanner = () => {
  return (
    <Box
      bgcolor="#ff9800"
      padding={1}
      textAlign="center"
      marginBottom={2}
    >
      <Typography variant="body1">
        ⚠️ Important Notice: As of April 18 2023, I will no longer be maintaining the
        tools available on this site. Some tools will remain accessible, but
        there will be no further updates or technical support. Please use them
        at your own risk and note that I cannot be held responsible for any
        issues, inaccuracy or malfunctions. Thank you for your understanding.
      </Typography>
    </Box>
  );
};

export default MaintenanceBanner;
