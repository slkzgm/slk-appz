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
  const commandList = [
    {command: 'diff', desc: 'The difference in supply distribution between what the rates would like, and what is actually revealed.'},
    {command: 'floor', desc: 'Floor prices of each related collections.'},
    {command: 'left', desc: 'What remains to be revealed, and their actual probabilities, taking into account the desired final distribution rates.'},
    {command: 'opening', desc: 'Usefull informations for an opening: Supply left to be revealed, probabilities and ETH value of the gain/loss that each DNA will involve.'},
    {command: 'revealed', desc: 'What has already been revealed, and the current distribution of each DNA and their floor price.'},
    {command: 'target', desc: 'What the final distribution should look like.'}
  ];
  const [stateCommand, setCommand] = React.useState(commandList[1]);
  const [stateData, setData] = React.useState(data);
  const handleClick = async (command) => {
    try {
      setData(await requestMnlthAPI(command.command));
      setCommand(command);
    } catch (e) {
      console.log(e);
      setData([{error: e}]);
      setCommand('locked');
    }
  };

  return (
    <Layout metaTags={metaTags}>
      <MnlthButton activeCommand={stateCommand} handleClick={handleClick} commandList={commandList}/>
      <MnlthTable data={stateData} />
      {
        stateCommand.command === 'opening' ?
          <Typography sx={{margin: '.5rem', textAlign: 'center'}}>
            Max value loss: {roundToTwo(stateData[9].maxLoss)} ETH.
            (-{roundToTwo(stateData[9].maxLossPercent)}%)
          </Typography> : ''
      }
    </Layout>
  );
}
