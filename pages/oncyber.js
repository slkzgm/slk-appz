import React, {useState} from 'react';
import Layout from "../components/Layout";
import {Box, TextField, Typography} from "@mui/material";
import {requestMetaTagAPI} from "../lib/metaTags";
import LoadingButton from '@mui/lab/LoadingButton';
import {requestOncyberArtworksList} from "../lib/oncyber";
import * as PropTypes from "prop-types";

export async function getServerSideProps(context) {
  const metaTags = await requestMetaTagAPI('oncyber');

  return {
    props: {
      metaTags
    }
  };
}

const ArtworksDisplay = ({ artworks }) => <Box>
  {artworks.map((artwork, index) =>
    <div key={index}>
      {Object.keys(artwork).map(field => {
        if (field === 'name')
          return <Typography color={'primary'}>{artwork[field]}</Typography>
        if (field === 'mimeType')
          return <Typography>{artwork[field]}</Typography>
        if (artwork[field])
          return <a href={artwork[field]} target={'_blank'} rel="noopener noreferrer">
            <Typography>{field}</Typography>
          </a>
      })}
    </div>)}
</Box>

export default function Oncyber({ metaTags }) {
  const [spaceId, setSpaceId] = useState("");
  const [artworksList, setArtworksList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const assets = await requestOncyberArtworksList(spaceId);
    setArtworksList(assets);
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
        <TextField id="outlined-basic" label="Oncyber ID" variant="outlined" value={spaceId} onChange={(e) => setSpaceId(e.target.value)}/>
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
