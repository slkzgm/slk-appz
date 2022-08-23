import React, {useState} from 'react';
import Layout from "../components/Layout";
import {Box, TextField} from "@mui/material";
import {requestMetaTagAPI} from "../lib/metaTags";
import LoadingButton from '@mui/lab/LoadingButton';
import {requestSandboxAsset} from "../lib/sandbox";

export async function getServerSideProps(context) {
  const metaTags = await requestMetaTagAPI();

  return {
    props: {
      metaTags
    }
  };
}

export default function Sandbox({ metaTags }) {
  const [cloneNumber, setCloneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const handleClick = async () => {
    setLoading(true);
    const url = await requestSandboxAsset(cloneNumber);
    setImgUrl(url);
    setLoading(false);
  }


  return (
    <Layout metaTags={metaTags}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={cloneNumber} onChange={(e) => setCloneNumber(e.target.value)}/>
      <LoadingButton
        loading = {loading}
        variant="outlined"
        onClick={handleClick}
      >
        Submit
      </LoadingButton>
      {imgUrl ?
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={imgUrl}
        >
        </Box> : ''
      }
    </Layout>
  )
}
