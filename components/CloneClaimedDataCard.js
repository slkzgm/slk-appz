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
} from "@mui/material";
import ClaimListItem from "./ClaimListItem";

function CloneClaimedDataCard({ cloneId, claimedData }) {
    const { forgeszn1, egg, dunk, ghostDunk } = claimedData;

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`https://clonex-assets.rtfkt.com/images/${cloneId}.png`}
                style={{ width: '100%', objectFit: 'cover' }}
            />

            <CardContent>
                <Typography variant="h6"
                    color={'green'}
                >Live</Typography>

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

                <Typography
                    variant="h6"
                    marginTop={'2rem'}
                    color={'red'}
                >
                    Past
                </Typography>

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
                            <ClaimListItem key={'ghostDunk'} item={{
                                name: 'RTFKT x Nike Dunk Genesis GHOST 👻',
                                maxMints: '2',
                                remainingMints: ghostDunk.toString(),
                                image: 'https://pbs.twimg.com/media/F-_rYmnakAAR1dv?format=jpg&name=large'
                            }}/>
                            <ClaimListItem key={'dunks'} item={{
                                name: 'RTFKT x Nike Dunk Genesis X 👟',
                                maxMints: '2',
                                remainingMints: dunk.toString(),
                                image: 'https://pbs.twimg.com/media/F8p1JlgXQAQWcE9?format=jpg&name=large'
                            }}/>
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

export default CloneClaimedDataCard;