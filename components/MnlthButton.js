import {Box, Button, Typography} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/material/styles";

export default function MnlthButton({ activeCommand, handleClick, commandList}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign:'center'}}
    >
      <Typography
        sx={{marginBottom: '.5rem'}}
      >
        {activeCommand.desc}
      </Typography>
      {commandList.map((command, index) =>
        <Button
          key={index}
          size={'small'}
          variant={"contained"}
          onClick={() => handleClick(command)}
          sx={
            command.command === activeCommand.command ?
              {margin: '.25rem', backgroundColor: theme.palette.primary.dark}
              : {margin: '.25rem'}
          }
        >
          {command.command}!
        </Button>
        )}
    </Box>
  );
}
