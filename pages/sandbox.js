import React, {useState} from 'react';
import Layout from "../components/Layout";
import {Box, TextField} from "@mui/material";
import {requestMetaTagAPI} from "../lib/metaTags";
import LoadingButton from '@mui/lab/LoadingButton';
import {requestSandboxAsset} from "../lib/sandbox";
import Image from "mui-image";

export async function getServerSideProps(context) {
  const metaTags = await requestMetaTagAPI('sandbox');

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
      <Box
        sx={{
          margin: '.5rem',
          textAlign: 'center'
        }}
      >
          <TextField id="outlined-basic" label="Clone #" variant="outlined" value={cloneNumber} onChange={(e) => setCloneNumber(e.target.value)}/>
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
        {imgUrl ?
          <Image src={imgUrl}
          /> : ''
        }
    </Layout>
  )
}
