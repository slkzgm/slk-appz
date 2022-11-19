import {roundToTwo} from "../lib/utils";
import React from "react";
import {Avatar, Box, Card, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const StatsGridCell = styled(Grid)({
  margin: 'auto'
});

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
      variant={'caption'}
      sx={{
        textTransform: 'uppercase'
      }}
    >
      {title}
    </Typography>
    <Typography
     variant={'body1'}
     color={symbol === '%' ? (value < 1 ? 'red' : 'green') : 'main'}
    >
      {symbol && symbol === 'ETH' ? 'Ξ' : ''}
      {roundToTwo(value)}
      {k ? 'K' : ''}{symbol && symbol === '%' ? '%' : ''}
    </Typography>
  </Box>;
};

export default function StatisticsTable({ collection }) {
  return (
    <Card sx={{margin: '1rem'}}>
      <Grid container colums={12}>
        <Grid item={true} xs={2}>
          <Avatar src={collection.image}/>
        </Grid>
        <Grid item={true} xs={8}>
          <Grid container columns={4}>
            <Grid item={true} xs={4}>
              <Typography sx={{textTransform: 'uppercase'}}>{collection.name}</Typography>
            </Grid>
            <StatsGridCell item={true} xs={1} sx={{margin: 'auto'}}>
              <DataField title={'floor'} value={collection.floorPrice} symbol={'ETH'}/>
            </StatsGridCell>
            <StatsGridCell item={true} xs={1}>
              <DataField title={'7d AVG.'} value={collection['7dAveragePrice']} symbol={'ETH'}/>
              <DataField title={'7d vol.'} value={collection['7dVolume']} symbol={'ETH'}/>
            </StatsGridCell>
            <StatsGridCell item={true} xs={1}>
              <DataField title={'24hr %'} value={collection['24hFloorPriceChange']} symbol={'%'}/>
              <DataField title={'7d %'} value={collection['7dFloorPriceChange']} symbol={'%'}/>
            </StatsGridCell>
            <StatsGridCell item={true} xs={1}>
              <DataField title={'30d AVG.'} value={collection['30dAveragePrice']} symbol={'ETH'}/>
              <DataField title={'30d vol.'} value={collection['30dVolume']} symbol={'ETH'}/>
            </StatsGridCell>
          </Grid>
        </Grid>
        <StatsGridCell item={true} xs={2} sx={{textAlign: 'center'}}>
          <Box>
            <Typography variant={'caption'} sx={{textTransform: 'uppercase'}}>
              total
            </Typography>
          </Box>
          <DataField title={'owners'} value={collection['owners']}/>
          <DataField title={'volume'} value={collection.volume} symbol={'ETH'}/>
        </StatsGridCell>
      </Grid>
    </Card>
  )
}
