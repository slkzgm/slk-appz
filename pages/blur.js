import React, {useState} from "react";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
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

const Block = ({label, value}) => {
  const handleClick = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 300);
  };
  const [copied, setCopied] = useState(false);

  return (
    <div style={{ width: '100%', margin: '.5rem'}}>
      <Typography>{label}</Typography>
      <Box
        component="span"
        sx={{
          display: 'flex',
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
        }}
      >
        <Grid container>
          <Grid item xs={11}>
            <Typography noWrap sx={{
              fontSize: '0.875rem',
              fontWeight: '700',
            }}>
              {value}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={handleClick}>
              {copied ? <InventoryRoundedIcon fontSize={'small'} sx={{
                fontSize: '0.75rem',
                fontWeight: '700',
              }}/> :
              <ContentPasteRoundedIcon fontSize={'small'} sx={{
                fontSize: '0.75rem',
                fontWeight: '700',
              }}/>}
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const InputParamsDisplay = ({ params }) => <Box>
  {params.account ? <Box sx={{
      padding: '.25rem',
      marginTop: '1rem'
    }}>
      <Box>
        <Typography>1. claim (0x3d13f874)</Typography>
      </Box>
      <Box>
        <Block label={'account (address)'} value={params.account}/>
        <Block label={'amount (uint256)'} value={params.amount}/>
        <Block label={'proof (bytes32[])'} value={params.proof}/>
      </Box>
    </Box>
    :
    ''
  }
</Box>

const BlurTutorial = () => <Box sx={{margin: '1rem'}}>
  <Divider variant={'middle'}><Typography>Tutorial</Typography></Divider>
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
        image={`${process.env.NEXT_PUBLIC_API_URL}public/img/blur.png`}
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
