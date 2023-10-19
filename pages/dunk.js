import {requestMetaTagAPI} from "../lib/metaTags";
import {
    Box,
    TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {requestDunkDetails, requestDunkForgedSupply} from "../lib/dunk";
import DunkCard from "../components/DunkCard";
import ForgedSupplyTable from "../components/DunkForgedSupplyTable";

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
    const [forgedSupply, setForgedSupply] = useState({og: 0, x: 0, v: 0});

    useEffect(() => {
        const fetchDunkForgeDetails = async () => {
            try {
                const forgeDetails = await requestDunkForgedSupply();
                setForgedSupply(forgeDetails);
            } catch (e) {
                console.log(e);
            }
        };

        fetchDunkForgeDetails();
    }, []);

    const updateDunkForgeDetails = async () => {
        try {
            const forgeDetails = await requestDunkForgedSupply();
            setForgedSupply(forgeDetails);
        } catch (e) {
            console.log(e);
        }
    }

    const handleCheckerClick = async () => {
        try {
            setLoading(true);
            const [newDunkData, newSupplyData] = await Promise.all([
                requestDunkDetails(dunkId),
                requestDunkForgedSupply()
            ]);
            setDunkData(newDunkData);
            setForgedSupply(newSupplyData)
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    return (
        <Layout metaTags={metaTags}>
            <ForgedSupplyTable forgedSupply={forgedSupply} updateDunkForgeDetails={updateDunkForgeDetails} />
            <Box
                sx={{
                    paddingTop: '2rem',
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
