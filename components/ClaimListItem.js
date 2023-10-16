import {Avatar, TableCell, TableRow} from "@mui/material";

function ClaimListItem({ item }) {
    const { image, name, maxMints, remainingMints } = item;

    return (
        <TableRow>
            <TableCell>
                <Avatar src={image} />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell align="center">{remainingMints}</TableCell>
            <TableCell align="center">{maxMints}</TableCell>
        </TableRow>
    );
}

export default ClaimListItem;