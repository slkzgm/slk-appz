import {Box, Button} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/material/styles";

const commandList = [
  'diff',
  'dunk',
  'floor',
  'left',
  'opening',
  'revealed',
  'skinvials',
  'target',
];

export default function MnlthButton({ activeCommand, handleClick}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign:'center'}}
    >
      {commandList.map(command =>
        <Button
          size={'small'}
          variant={"contained"}
          onClick={() => handleClick(command)}
          sx={
            command === activeCommand ?
              {margin: '.25rem', backgroundColor: theme.palette.primary.dark}
              : {margin: '.25rem'}
          }
        >
          {command}!
        </Button>
      )}
    </Box>
  );
}
