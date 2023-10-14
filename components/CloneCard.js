import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    IconButton,
    Box
} from '@mui/material';
import React, {useState} from 'react';
import Link from "next/link";
import axios from "axios";
import {LoadingButton} from "@mui/lab";
import OpenseaIcon from "./OpenseaIcon";
import LooksrareIcon from "./LooksrareIcon";
import X2y2Icon from "./X2y2Icon";
import BlurIcon from "./BlurIcon";

const CloneCard = ({ cloneId, claimed }) => {
    const imgURL = `https://clonex-assets.rtfkt.com/images/${cloneId}.png`;
    const openseaURL = `https://opensea.io/assets/ethereum/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/${cloneId}`;
    const blurURL = `https://blur.io/asset/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/${cloneId}`;
    const looksrareURL = `https://looksrare.org/collections/0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B/${cloneId}`;
    const x2y2URL = `https://x2y2.io/eth/0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B/${cloneId}`;


    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(claimed);

    const handleCheck = async () => {
        try {
            setLoading(true);
            const req = (await axios.get(`http://slkzgm.com/claimcheck/${cloneId}`)).data;
            setCheck(req.egg);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link href={openseaURL} passHref>
                <CardActionArea component={'a'} target={'_blank'}>
                    <CardMedia
                        component="img"
                        image={imgURL}
                        alt={cloneId}
                    />
                    <CardContent>
                        {check ?
                            <Typography textAlign={'center'} gutterBottom variant="h5" component="div" color={'red'}>
                                Claimed :(
                            </Typography>
                            :
                            <Typography textAlign={'center'} gutterBottom variant="h5" component="div" color={'green'}>
                                Available
                            </Typography>
                        }
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions sx={{justifyContent: 'center'}}>
                <LoadingButton
                    loading={loading}
                    variant="outlined"
                    onClick={handleCheck}
                    sx={{ alignItems: "center" }}
                    fullWidth
                >
                    Update
                </LoadingButton>
            </CardActions>
            <CardActions sx={{justifyContent: 'center'}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', paddingLeft: '2rem', paddingRight: '2rem'}}>
                    <Link href={openseaURL} passHref>
                        <IconButton component={'a'} target={'_blank'}>
                            <OpenseaIcon color={'primary'} />
                        </IconButton>
                    </Link>
                    <Link href={blurURL} passHref>
                        <IconButton component={'a'} target={'_blank'}>
                            <BlurIcon />
                        </IconButton>
                    </Link>
                    <Link href={looksrareURL} passHref>
                        <IconButton component={'a'} target={'_blank'}>
                            <LooksrareIcon />
                        </IconButton>
                    </Link>
                    <Link href={x2y2URL} passHref>
                        <IconButton component={'a'} target={'_blank'}>
                            <X2y2Icon />
                        </IconButton>
                    </Link>
                </Box>
            </CardActions>
        </Card>
    );
}

export default CloneCard;