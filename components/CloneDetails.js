import CloneCard from "./CloneCard";
import {Box} from "@mui/material";

export default function CloneDetails({ cloneId }) {
   return <Box
       display="flex"
       justifyContent="center"
       alignItems="center"
       height="100%"
   >
      <CloneCard cloneId={cloneId} claimed/>
   </Box>
}
