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

function DunkCard({ dunkData }) {
    const { claimDetails, equippedVial, vialDNA } = dunkData;
    const dna = dunkData.vialDNA ? dunkData.vialDNA.toLowerCase() : 'base';

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`https://ipfs.io/ipfs/QmUFuKaQLyhGAiugMy81ggqc28Wpn3yrDmyWtRso8t7j1H/${dna}.png`}
                style={{ width: '100%', objectFit: 'cover' }}
            />

            <CardContent>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                    <Typography>SKINVIAL ID: {equippedVial === '0' ? 'NO VIAL' : equippedVial}</Typography>
                    <Typography>DNA: {vialDNA ? vialDNA : 'BLANK'}</Typography>
                </div>
                <Typography
                    variant="h6"
                    marginTop={'2rem'}
                >
                    Live
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
                            <ClaimListItem key={'og'} item={{
                                name: 'RTFKT x Nike Dunk Genesis OG 👟',
                                maxMints: '1',
                                remainingMints: claimDetails.og,
                                image: '/images/rtfkt-dunk-x.png'
                            }}/>
                            <ClaimListItem key={'x'} item={{
                                name: 'RTFKT x Nike Dunk Genesis X 👟',
                                maxMints: '2',
                                remainingMints: claimDetails.x,
                                image: '/images/rtfkt-dunk-x.png'
                            }}/>
                            <ClaimListItem key={'void'} item={{
                                name: 'RTFKT x Nike Dunk Genesis VOID 👟',
                                maxMints: '2',
                                remainingMints: claimDetails.v,
                                image: '/images/rtfkt-dunk-x.png'
                            }}/>
                        </TableBody>
                    </Table>
                </TableContainer>

                {/*<Typography*/}
                {/*    variant="h6"*/}
                {/*    marginTop={'2rem'}*/}
                {/*>*/}
                {/*    Past*/}
                {/*</Typography>*/}

                {/*<TableContainer>*/}
                {/*    <Table>*/}
                {/*        <TableHead>*/}
                {/*            <TableRow>*/}
                {/*                <TableCell></TableCell>*/}
                {/*                <TableCell>Name</TableCell>*/}
                {/*                <TableCell align="right">Availables</TableCell>*/}
                {/*                <TableCell align="right">Max</TableCell>*/}
                {/*            </TableRow>*/}
                {/*        </TableHead>*/}
                {/*        <TableBody>*/}
                {/*            {forgeszn1.map((item) => (*/}
                {/*                <ClaimListItem key={item.id} item={item}/>*/}
                {/*            ))}*/}
                {/*        </TableBody>*/}
                {/*    </Table>*/}
                {/*</TableContainer>*/}
            </CardContent>
        </Card>
    );
}

export default DunkCard;
