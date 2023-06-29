import {requestMetaTagAPI} from "../lib/metaTags";
import Layout from "../components/Layout";
import {Divider, Grid, TextField, Typography} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, {useState} from "react";
import {requestEggToClone, requestUnclaimedClones} from "../lib/eggs";
import CloneDetails from "../components/CloneDetails";
import PaginatedCloneList from "../components/PaginatedClonesList";

export async function getServerSideProps(context) {
    const metaTags = await requestMetaTagAPI('eggs');
    const unclaimedClones = await requestUnclaimedClones();

    return {
        props: {
            metaTags,
            unclaimedClones
        }
    };
}

export default function Eggs({ metaTags, unclaimedClones }) {
    const [eggId, setEggId] = useState('');
    const [loading, setLoading] = useState(false);
    const [eggToClone, setEggToClone] = useState();

    const handleCheckerClick = async () => {
        try {
            setLoading(true);
            setEggToClone(await requestEggToClone(eggId));
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    return <Layout metaTags={metaTags}>
        <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ margin: '.5rem' }}
        >
            <Grid item xs={4}>
                <Typography color={'primary'} variant={"h6"}>Egg to Clone:</Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-basic"
                    label="Egg ID or OS link"
                    variant="outlined"
                    value={eggId}
                    onChange={(e) => {
                        if (e.target.value[0] === 'h' && e.target.value.split('https://')) {
                            e.target.value = e.target.value.split('/')[6]
                        }
                        setEggId(e.target.value);
                    }}
                    fullWidth
                />
            </Grid>
            <Grid item xs={2}>
                <LoadingButton
                    loading={loading}
                    variant="outlined"
                    onClick={handleCheckerClick}
                    sx={{ alignItems: "center" }}
                    fullWidth
                >
                    Submit
                </LoadingButton>
            </Grid>
        </Grid>
        {
            eggToClone && eggToClone.cloneId > 0
                ? <CloneDetails cloneId={eggToClone.cloneId} />
                : ''
        }
        <Divider sx={{margin: '2rem'}}>
            Unclaimed Clones
        </Divider>
        {
            unclaimedClones.length > 0
                ? <PaginatedCloneList clones={unclaimedClones} />
                : 'No unclaimed clones available'
        }
    </Layout>
}
