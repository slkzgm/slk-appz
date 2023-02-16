import React, {useState} from "react";
import Layout from "../components/Layout";
import {Box, CardMedia, TextField, Typography} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {requestBlurAirdropInputs} from "../lib/blur";
import {requestMetaTagAPI} from "../lib/metaTags";

export async function getServerSideProps(context) {
  const metaTags = await requestMetaTagAPI('blur');

  return {
    props: {
      metaTags
    }
  };
}

const InputParamsDisplay = ({ params }) => <Box>
  {params.account ?
    <Box>
      <Typography>account (address)</Typography>
      <Typography>{params.account}</Typography>
      <Typography>amount (uint256)</Typography>
      <Typography>{params.amount}</Typography>
      <Typography>proof (bytes32[])</Typography>
      <Typography>{params.proof}</Typography>
    </Box>
    :
    ''
  }
</Box>

const BlurTutorial = () => <Box sx={{margin: '1rem'}}>
  <Typography>1) Right-Click on the 'OPEN CARE PACKAGES FOR $BLUR' button, and copy link</Typography>
  <Typography>2) Paste your link in the field above</Typography>
  <Typography>3) Go to the etherscan BlurAirdrop contract page: 0xF2d15C0A89428C9251d71A0E29b39FF1e86bce25</Typography>
  <Typography>4) On etherscan, click on Contract tab, then on Write Contract tab</Typography>
  <Typography>5) Click the connect button to connect with Metamask</Typography>
  <Typography>6) Open 1. claim (0x3d13f874)</Typography>
  <Typography>7) Paste the details from the window above to the correct fields</Typography>
  <Typography>8) Click Write</Typography>
  <Typography>9) Verify and send your claiming transaction</Typography>
</Box>

export default function Blur({ metaTags }) {
  const [airdropUrl, setAirdropUrl] = useState("");
  const [inputParams, setInputParams] = useState({});
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const assets = await requestBlurAirdropInputs(airdropUrl);
    setInputParams(assets);
    setLoading(false);
  }

  return (
    <Layout metaTags={metaTags}>
      <CardMedia
        component={'img'}
        image={'https://www.slkzgm.com/public/img/blur.png'}
        sx={{height: '100%', borderRadius: '2%'}}
      />
      <Box
        sx={{
          margin: '.5rem',
          textAlign: 'center'
        }}
      >
        <TextField id="outlined-basic" label="Airdrop URL" variant="outlined" value={airdropUrl} onChange={(e) => setAirdropUrl(e.target.value)}/>
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
      {inputParams ? <InputParamsDisplay params={inputParams}/> : ''}
      <BlurTutorial/>
    </Layout>
  )
}
