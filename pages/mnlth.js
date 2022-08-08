import React from 'react';
import {requestMnlthAPI} from "../lib/mnlth";
import MnlthTable from "../components/MnlthTable";
import Layout from "../components/Layout";
import MnlthButton from "../components/MnlthButton";
import {Typography} from "@mui/material";
import {roundToTwo} from "../lib/utils";
import {requestMetaTagAPI} from "../lib/metaTags";

export async function getServerSideProps(context) {
  const data = await requestMnlthAPI('floor');
  const metaTags = await requestMetaTagAPI('mnlth');

  return {
    props: {
      data,
      metaTags
    }
  };
}

export default function Mnlth({ data, metaTags }) {
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
  const commandList = [
    'diff',
    'dunk',
    'floor',
    'left',
    'opening',
    'revealed',
    'skinvials',
    'target',
  ];

  return (
    <Layout metaTags={metaTags}>
      <MnlthButton activeCommand={stateCommand} handleClick={handleClick} commandList={commandList}/>
      <MnlthTable data={stateData} />
      {
        stateCommand === 'opening' ?
          <Typography sx={{margin: '.5rem', textAlign: 'center'}}>
            Max value loss: {roundToTwo(stateData[9].maxLoss)} ETH.
            (-{roundToTwo(stateData[9].maxLossPercent)}%)
          </Typography> : ''
      }
    </Layout>
  );
}
