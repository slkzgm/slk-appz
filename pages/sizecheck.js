import React, {useState} from 'react';
import Layout from "../components/Layout";
import {Box, TextField, Typography} from "@mui/material";
import {requestMetaTagAPI} from "../lib/metaTags";
import LoadingButton from '@mui/lab/LoadingButton';
import {requestCirlSize} from "../lib/sizeCheck";

export async function getServerSideProps(context) {
  const metaTags = await requestMetaTagAPI('sizecheck');

  return {
    props: {
      metaTags
    }
  };
}

export default function Sizecheck({ metaTags }) {
  const [cirlId, setCirlId] = useState("");
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("");

  const handleClick = async () => {
    setLoading(true);
    const size = await requestCirlSize(cirlId);
    setSize(size);
    setLoading(false);
  }


  return (
    <Layout metaTags={metaTags}>
      <Box
        sx={{
          margin: '.5rem',
          textAlign: 'center'
        }}
      >
          <TextField id="outlined-basic" label="Cirl ID" variant="outlined" value={cirlId} onChange={(e) => setCirlId(e.target.value)}/>
          <LoadingButton
            loading = {loading}
            variant="outlined"
            onClick={handleClick}
            sx={{
              alignItems: "center"
            }}
          >
            Submit
          </LoadingButton>
      </Box>
        {size ?
          <Typography
            textAlign={'center'}
          >${size}</Typography> : ''
        }
    </Layout>
  )
}
