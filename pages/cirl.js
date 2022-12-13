import React, {useState} from 'react';
import Layout from "../components/Layout";
import {Box, TextField, Typography, Select, MenuItem, Button} from "@mui/material";
import {requestMetaTagAPI} from "../lib/metaTags";
import LoadingButton from '@mui/lab/LoadingButton';
import {requestCirlSize, findCirl} from "../lib/cirl";

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
  const [metadatas, setMetadatas] = useState('');
  const [size, setSize] = useState(8.5);
  const [cw, setCw] = useState('ICE');
  const [hubbed, setHubbed]  = useState([]);

  const handleMetadataClick = async () => {
    setLoading(true);
    setMetadatas(await requestCirlSize(cirlId));
    setLoading(false);
  }

  const handleFindClick = async () => {
    setHubbed(await findCirl(size, cw));
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
        {metadatas ?
          <Typography
            textAlign={'center'}
          >{metadatas}</Typography> : ''
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
        <LoadingButton
          variant="outlined"
          onClick={handleFindClick}
          sx={{
            alignItems: "center"
          }}
        >
          Search
        </LoadingButton>
        {
          hubbed.length ? hubbed.map(pair => <Box
            key={pair.id}
            sx={{margin: '1rem'}}
          >
            <Button>
              <Typography>{pair.id}</Typography>
            </Button>
            <Typography>{pair.cw}</Typography>
            <Typography>{pair.size}</Typography>
          </Box>) : ''
        }
      </Box>
    </Layout>
  )
}