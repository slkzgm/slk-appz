import React from 'react';
import MnlthTable from "../components/MnlthTable";
import Layout from "../components/Layout";
import MnlthButton from "../components/MnlthButton";
import {Typography} from "@mui/material";
import {roundToTwo} from "../lib/utils";
import {requestMintvialAPI} from "../lib/mintvial";
import {requestMetaTagAPI} from "../lib/metaTags";

export async function getServerSideProps(context) {
  const data = await requestMintvialAPI('floor');
  const metaTags = await requestMetaTagAPI('mintvials');

  return {
    props: {
      data,
      metaTags
    }
  };
}

export default function Mintvials({ data, metaTags }) {
  const [stateCommand, setCommand] = React.useState('floor');
  const [stateData, setData] = React.useState(data);
  const handleClick = async (command) => {
    try {
      setData(await requestMintvialAPI(command));
      setCommand(command);
    } catch (e) {
      console.log(e);
      setData([{error: e}]);
      setCommand('locked');
    }
  };
  const commandList = [
    'diff',
    'floor',
    'left',
    'opening',
    'revealed',
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
