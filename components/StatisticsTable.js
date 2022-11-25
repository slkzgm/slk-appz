import {roundToTwo} from "../lib/utils";
import React from "react";
import {Box, Card, CardMedia, Grid, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const DataField = ({title, value, symbol}) => {
  let k = false;

  if (value > 9999 && title === 'volume') {
    value /= 1000;
    k = true;
  }
  if (symbol && symbol === '%')
    value = (value - 1) * 100;

  return <Box>
    <Typography
      variant={'csLabel'}
      display={'block'}
    >
      {title}
    </Typography>
    <Typography
     variant={'csValue'}
     color={symbol === '%' ? (value < 1 ? 'red' : 'green') : 'main'}
    >
      {symbol && symbol === 'ETH' ? 'Ξ' : ''}
      {roundToTwo(value)}
      {k ? 'K' : ''}{symbol && symbol === '%' ? '%' : ''}
    </Typography>
  </Box>;
};

export default function StatisticsTable({ collection }) {
  const theme = useTheme();

  return (
    <Card sx={{margin: '1rem', borderRadius: '1rem'}}>
      <Grid container colums={12}>
        <Grid item={true} xs={2}>
          <CardMedia
            component={"img"}
            height={"100%"}
            src={collection.image}
          />
        </Grid>
        <Grid item={true} xs={8}>
          <Grid container columns={4} sx={{marginLeft: '.5rem'}}>
            <Grid item={true} xs={4}>
              <Typography variant={'csTitle'}>{collection.name}</Typography>
            </Grid>
            <Grid item={true} xs={1} sx={{margin: 'auto'}}>
              <DataField title={'floor'} value={collection.floorPrice} symbol={'ETH'}/>
            </Grid>
            <Grid item={true} xs={1}>
              <DataField title={'7d AVG.'} value={collection['7dAveragePrice']} symbol={'ETH'}/>
              <DataField title={'7d vol.'} value={collection['7dVolume']} symbol={'ETH'}/>
            </Grid>
            <Grid item={true} xs={1}>
              <DataField title={'24hr %'} value={collection['24hFloorPriceChange']} symbol={'%'}/>
              <DataField title={'7d %'} value={collection['7dFloorPriceChange']} symbol={'%'}/>
            </Grid>
            <Grid item={true} xs={1}>
              <DataField title={'30d AVG.'} value={collection['30dAveragePrice']} symbol={'ETH'}/>
              <DataField title={'30d vol.'} value={collection['30dVolume']} symbol={'ETH'}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item={true} xs={2} sx={{textAlign: 'center'}} backgroundColor={theme.palette.background.darker}>
          <Box>
            <Typography variant={'csLabel'}>
              total
            </Typography>
          </Box>
          <DataField title={'owners'} value={collection['owners']}/>
          <DataField title={'volume'} value={collection.volume} symbol={'ETH'}/>
        </Grid>
      </Grid>
    </Card>
  )
}
