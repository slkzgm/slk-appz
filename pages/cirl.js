import React, {useState} from 'react';
import Layout from "../components/Layout";
import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
  Card,
  CardMedia,
  CardContent, Grid
} from "@mui/material";
import {requestMetaTagAPI} from "../lib/metaTags";
import LoadingButton from '@mui/lab/LoadingButton';
import {requestCirlDetails, findCirl} from "../lib/cirl";

const getPlaceHolder = (cw) => {
  switch (cw) {
    case 'STONE':
      return 'https://i.seadn.io/gcs/files/dfac3ea5fe9df7a672a6a54539bc665d.png?auto=format&w=3840';
    case 'BLACKOUT':
      return 'https://i.seadn.io/gcs/files/8255db62f80b05fe0cc38ed62d3bdbc6.png?auto=format&w=3840';
    case 'ICE':
      return 'https://i.seadn.io/gcs/files/824fe45ba99a8c53da4b2f8a0063154d.png?auto=format&w=3840';
    case 'SPACE MATTER':
      return 'https://i.seadn.io/gcs/files/086e46c2c6290dbb960d26b39a4f9abe.png?auto=format&w=3840';
  }
}

const CirlBox = ({metadata}) =>
  <Card sx={{borderRadius: 0}}>
    <Grid container>
      <Grid item xs={4}>
        <CardMedia
          component={'img'}
          image={getPlaceHolder(metadata.cw)}
          sx={{height: '100%'}}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography textAlign={'center'}>{metadata.id}</Typography>
        <Typography textAlign={'center'}>{metadata.cw}</Typography>
        <Typography textAlign={'center'}>{metadata.size}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography textAlign={'center'}>{metadata.hubbed === true ? 'HUBBED 🔀' : 'FORGED ⚒️'}</Typography>
      </Grid>
    </Grid>
  </Card>

export async function getServerSideProps(context) {
  const metaTags = await requestMetaTagAPI('sizecheck');

  return {
    props: {
      metaTags
    }
  };
}

export default function Cirl({ metaTags }) {
  const [cirlId, setCirlId] = useState('');
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState({});
  const [size, setSize] = useState(8.5);
  const [cw, setCw] = useState('ICE');
  const [state, setState] = useState(false);
  const [hubbed, setHubbed]  = useState([]);

  const handleMetadataClick = async () => {
    setLoading(true);
    setMetadata(await requestCirlDetails(cirlId));
    setLoading(false);
  }

  const handleFindClick = async () => {
    setHubbed(await findCirl(size, cw, state));
  }


  return (
    <Layout metaTags={metaTags}>
      <Box>
        <Box
          sx={{
            margin: '.5rem',
            textAlign: 'center'
          }}
        >
          <TextField id="outlined-basic" label="Cirl ID or OS link" variant="outlined" value={cirlId} onChange={(e) => {
            if (e.target.value[0] === 'h' && e.target.value.split('https://')) {
              e.target.value = e.target.value.split('/')[6]
            }
            setCirlId(e.target.value);
          }}/>
          <LoadingButton
            loading = {loading}
            variant="outlined"
            onClick={handleMetadataClick}
            sx={{
              alignItems: "center"
            }}
          >
            Submit
          </LoadingButton>
        </Box>
        {metadata && metadata.id ?
          <CirlBox metadata={metadata}/>: ''
        }
      </Box>
      <Box
        sx={{textAlign: 'center'}}
      >
        <Typography
          variant={'h5'} color={'primary'} sx={{textAlign: 'center', margin: '.5rem'}}
        >
          CIRL FINDER
        </Typography>
        <Select
          label={'size'}
          id={'size'}
          value={size}
          onChange={event => setSize(event.target.value)}
        >
          {[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,
            14,14.5,15,15.5,16].map(size =>
            <MenuItem key={size} value={size}>{size}</MenuItem>
          )}
        </Select>
        <Select
          label={'cw'}
          id={'cw'}
          value={cw}
          onChange={(event => setCw(event.target.value))}
        >
          <MenuItem value={'ANY'}>ANY</MenuItem>
          <MenuItem value={'BLACKOUT'}>BLACKOUT</MenuItem>
          <MenuItem value={'ICE'}>ICE</MenuItem>
          <MenuItem value={'SPACE MATTER'}>SPACE MATTER</MenuItem>
          <MenuItem value={'STONE'}>STONE</MenuItem>
        </Select>
        <Select
          label={'state'}
          id={'state'}
          value={state}
          onChange={(event => setState(event.target.value))}
        >
          <MenuItem value={false}>ALL</MenuItem>
          <MenuItem value={true}>HUBBED</MenuItem>
        </Select>
        <LoadingButton
          variant="outlined"
          onClick={handleFindClick}
          sx={{
            alignItems: "center"
          }}
        >
          Search
        </LoadingButton>
        <Typography color={'primary'}>Assets found: {hubbed.length}</Typography>
        {
          hubbed.length ? hubbed.map(pair => <Box
            key={pair.id}
            sx={{margin: '1rem'}}
          >
            <Button
              href={`https://opensea.io/fr/assets/ethereum/0x11708dc8a3ea69020f520c81250abb191b190110/${pair.id}`}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              <Typography>{pair.id}</Typography>
            </Button>
            <Typography>{pair.cw}</Typography>
            <Typography>{pair.size}</Typography>
            <Typography>{pair.hubbed ? 'HUBBED 🔀' : 'FORGED ⚒️'}</Typography>
          </Box>) : ''
        }
      </Box>
    </Layout>
  )
}
