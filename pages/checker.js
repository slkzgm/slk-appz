import {requestMetaTagAPI} from "../lib/metaTags";
import {Box, TextField} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, {useState} from "react";
import Layout from "../components/Layout";
import {requestClaimCheckDetails} from "../lib/checker";
import CloneClaimedDataCard from "../components/CloneClaimedDataCard";

export async function getServerSideProps(context) {
    const metaTags = await requestMetaTagAPI('claimcheck');

    return {
        props: {
            metaTags
        }
    };
}

export default function Checker({ metaTags }) {
    const [cloneId, setCloneId] = useState('');
    const [loading, setLoading] = useState(false);
    const [claimedData, setClaimedData] = useState({});
    const [selectedCloneId, setSelectedCloneId] = useState();

    // TODO: Remonve once replaced with correct method
    claimedData.dunks = 2;

    const handleCheckerClick = async () => {
        try {
            setLoading(true);
            setSelectedCloneId(cloneId);
            setClaimedData(await requestClaimCheckDetails(cloneId));
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    return (
        <Layout metaTags={metaTags}>
            <Box
                sx={{
                    margin: '.5rem',
                    textAlign: 'center'
                }}
            >
                <TextField id="outlined-basic" label="Clone ID or OS link" variant="outlined" value={cloneId} onChange={(e) => {
                    if (e.target.value[0] === 'h' && e.target.value.split('https://')) {
                        e.target.value = e.target.value.split('/')[6]
                    }
                    setCloneId(e.target.value);
                }}/>
                <LoadingButton
                    loading = {loading}
                    variant="outlined"
                    onClick={handleCheckerClick}
                    sx={{
                        alignItems: "center"
                    }}
                >
                    Submit
                </LoadingButton>
            </Box>
            {claimedData && claimedData.forgeszn1 ?
                <CloneClaimedDataCard cloneId={selectedCloneId} claimedData={claimedData} /> : ''
            }
        </Layout>
    )
}