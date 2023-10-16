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
    const { forgeszn1, egg, dunks } = claimedData;

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
                            <ClaimListItem key={'dunks'} item={{
                                name: 'RTFKT x Nike Dunk Genesis X 👟',
                                maxMints: '2',
                                remainingMints: dunks.toString(),
                                image: '/images/rtfkt-dunk-x.png'
                            }}/>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography
                    variant="h6"
                    marginTop={'2rem'}
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