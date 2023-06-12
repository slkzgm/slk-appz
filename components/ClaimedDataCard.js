// import {
//     Card,
//     CardContent,
//     CardMedia,
//     Typography,
//     List,
//     ListItem,
//     Divider,
//     ListItemText,
//     Box, ListItemAvatar, Avatar
// } from "@mui/material";
//
// const ClaimListItem = ({ item }) => {
//     const { image, name, maxMints, remainingMints } = item;
//
//     return (
//         <ListItem>
//             <ListItemAvatar>
//                 <Avatar src={image} />
//             </ListItemAvatar>
//             <ListItemText primary={name} />
//             <Box
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'flex-end',
//                     alignItems: 'center',
//                     flex: 1
//                 }}
//             >
//                 <ListItemText primary={`availables: ${remainingMints}`} />
//                 <ListItemText primary={`max: ${maxMints}`} />
//             </Box>
//         </ListItem>
//     );
// }
//
// function ClaimedDataCard({ claimedData }) {
//     const { forgeszn1, egg } = claimedData;
//     console.log(egg);
//
//     return (
//         <Card>
//             <CardMedia
//                 component="img"
//                 height="140"
//                 image="https://clonex-assets.rtfkt.com/images/4608.png"
//                 style={{ width: '100%', objectFit: 'cover' }}
//             />
//
//             <CardContent>
//                 <List>
//                     <Typography variant="h6">Live</Typography>
//                     <Typography variant="body2">{egg ? 'Claimed' : 'Available'}</Typography>
//                     <Divider />
//
//                     <Typography variant="h6">Past</Typography>
//                     {forgeszn1.map((item) => (
//                         <ClaimListItem key={item.id} item={item}/>
//                     ))}
//                 </List>
//             </CardContent>
//         </Card>
//     );
// }
//
// export default ClaimedDataCard;

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box,
    Avatar
} from "@mui/material";

const ClaimListItem = ({ item }) => {
    const { image, name, maxMints, remainingMints } = item;

    return (
        <TableRow>
            <TableCell>
                <Avatar src={image} />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell align="right">{remainingMints}</TableCell>
            <TableCell align="right">{maxMints}</TableCell>
        </TableRow>
    );
}

function ClaimedDataCard({ cloneId, claimedData }) {
    const { forgeszn1, egg } = claimedData;

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`https://clonex-assets.rtfkt.com/images/${cloneId}.png`}
                style={{ width: '100%', objectFit: 'cover' }}
            />

            <CardContent>
                <Typography variant="h6">Live</Typography>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Availables</TableCell>
                                <TableCell align="right">Max</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <ClaimListItem key={'egg'} item={{
                                name: 'RTFKT Animus Egg 🥚',
                                maxMints: '1',
                                remainingMints: egg ? 0 : 1,
                                image: 'https://i.seadn.io/gcs/files/8abae8ea29458a8b1c275568592fdd95.jpg'
                            }}/>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography variant="h6">Past</Typography>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Availables</TableCell>
                                <TableCell align="right">Max</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {forgeszn1.map((item) => (
                                <ClaimListItem key={item.id} item={item}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

export default ClaimedDataCard;