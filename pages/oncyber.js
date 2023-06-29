import React, {useState} from 'react';
import Layout from "../components/Layout";
import {Box, Button, CardMedia, Divider, Grid, TextField, Typography} from "@mui/material";
import {requestMetaTagAPI} from "../lib/metaTags";
import LoadingButton from '@mui/lab/LoadingButton';
import {requestOncyberArtworksList} from "../lib/oncyber";

export async function getServerSideProps(context) {
  const metaTags = await requestMetaTagAPI('oncyber');

  return {
    props: {
      metaTags
    }
  };
}

const ArtworkDisplay = ({artwork, index}) =>
  <Grid key={index} container spacing={2} justifyContent={'center'} alignItems={'center'}
    sx={{textAlign: 'center', margin: '1rem', padding: '0.5rem', borderRadius: '2%',
      }}
  >
    <Grid item xs={6}>
      <CardMedia
        component={'img'}
        image={artwork.image_preview_url}
        sx={{height: '100%', borderRadius: '2%'}}
      />
    </Grid>
    <Grid item xs={6}>
      <Grid item xs={12}>
        <Typography variant={'primary'} color={'primary'}>{artwork.name}</Typography>
        <Typography>{artwork.mimeType}</Typography>
      </Grid>
      <Divider sx={{margin: '1rem'}}/>
      <Grid item xs={12} zeroMinWidth>
        {Object.keys(artwork).map((field, index) => {
          if (artwork[field] && field !== 'name' && field !== 'mimeType') {
            return <a href={artwork[field]} target={'_blank'} rel="noopener noreferrer" key={index}>
              <Typography>{field}</Typography>
            </a>
          }
        })}
      </Grid>
    </Grid>
  </Grid>

const ArtworksDisplay = ({ artworks }) =>
  <Box>{artworks.map((artwork, index) => <ArtworkDisplay key={index} artwork={artwork} index={index}/>)}</Box>

export default function Oncyber({ metaTags }) {
  const [oncyberUrl, setOncyberUrl] = useState("");
  const [artworksList, setArtworksList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const assets = await requestOncyberArtworksList(oncyberUrl);
    setArtworksList(assets);
    setLoading(false);
  }


  return (
    <Layout metaTags={metaTags}>
      <CardMedia
        component={'img'}
        image={'https://www.slkzgm.com/public/img/oncyber_tutorial.png'}
        sx={{height: '100%', borderRadius: '2%'}}
      />
      <Box
        sx={{
          margin: '.5rem',
          textAlign: 'center'
        }}
      >
        <TextField id="outlined-basic" label="Oncyber URL" variant="outlined" value={oncyberUrl} onChange={(e) => setOncyberUrl(e.target.value)}/>
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
      {artworksList.length ? <ArtworksDisplay artworks={artworksList}/> : ''}
    </Layout>
  )
}
