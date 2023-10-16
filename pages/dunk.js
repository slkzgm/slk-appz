import {requestMetaTagAPI} from "../lib/metaTags";
import {Box, TextField} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, {useState} from "react";
import Layout from "../components/Layout";
import {requestDunkDetails} from "../lib/dunk";
import DunkCard from "../components/DunkCard";

export async function getServerSideProps(context) {
    const metaTags = await requestMetaTagAPI('dunk');

    return {
        props: {
            metaTags
        }
    };
}

export default function DunkChecker({ metaTags }) {
    const [dunkId, setDunkId] = useState('');
    const [loading, setLoading] = useState(false);
    const [dunkData, setDunkData] = useState({});

    const handleCheckerClick = async () => {
        try {
            setLoading(true);
            setDunkData(await requestDunkDetails(dunkId));
            console.log(dunkData);
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
                <TextField id="outlined-basic" label="Dunk ID or OS link" variant="outlined" value={dunkId} onChange={(e) => {
                    if (e.target.value[0] === 'h' && e.target.value.split('https://')) {
                        e.target.value = e.target.value.split('/')[6]
                    }
                    setDunkId(e.target.value);
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
            {dunkData && dunkData.equippedVial ?
                <DunkCard dunkData={dunkData} /> : ''
            }
        </Layout>
    )
}
