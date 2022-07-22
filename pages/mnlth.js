import React from 'react';
import {requestMnlthAPI} from "../lib/mnlth";
import MnlthTable from "../components/MnlthTable";
import Layout from "../components/Layout";
import MnlthButton from "../components/MnlthButton";
import {Box, Button, Typography} from "@mui/material";
import {roundToTwo} from "../lib/utils";

export async function getServerSideProps(context) {
  const data = await requestMnlthAPI('floor');

  return {
    props: {
      data
    }
  };
}

export default function Mnlth({ data }) {
  const [stateCommand, setCommand] = React.useState('floor');
  const [stateData, setData] = React.useState(data);
  const handleClick = async (command) => {
    try {
      setData(await requestMnlthAPI(command));
      setCommand(command);
    } catch (e) {
      console.log(e);
      setData([{error: e}]);
      setCommand('locked');
    }
  };

  return (
    <Layout>
      {/*<Typography variant={'body2'} paragraph={true} textAlign={'center'}>*/}
      {/*  Temporarily unavailable as the scrapping script needs to be updated and I'm not available until the end of the month. <br/>*/}
      {/*  Please, see the link below for less detailed live data. <br/>*/}
      {/*  My apologizes for the inconvenience.*/}
      {/*</Typography>*/}
      {/*<Box sx={{textAlign: 'center', margin: '.5rem'}}>*/}
      {/*  <Button variant={'contained'} color={'error'}>*/}
      {/*    <a href={"https://docs.google.com/spreadsheets/d/1MfLZU3EKSBlbNm1v_eSMvd1kCjMugu9wAXI4Fdvq-kE/edit?usp=sharing"} target={'_blank'} rel="noopener noreferrer">*/}
      {/*      <Typography variant={'button'} fontWeight={'bold'}>*/}
      {/*        GSheet MNLTH live data*/}
      {/*      </Typography>*/}
      {/*    </a>*/}
      {/*  </Button>*/}
      {/*</Box>*/}
      <MnlthButton activeCommand={stateCommand} handleClick={handleClick}/>
      <MnlthTable data={stateData} />
      {
        stateCommand === 'opening' ?
          <Typography sx={{margin: '.5rem', textAlign: 'center'}}>Max value loss: {roundToTwo(stateData[9].maxLoss)} ETH. (-{roundToTwo(stateData[9].maxLossPercent)}%)</Typography> : ''
      }
    </Layout>
  );
}
