import React from 'react';
import {requestMnlthAPI} from "../lib/mnlth";
import MnlthTable from "../components/MnlthTable";
import Layout from "../components/Layout";
import MnlthButton from "../components/MnlthButton";
import {Typography} from "@mui/material";
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
      <MnlthButton activeCommand={stateCommand} handleClick={handleClick}/>
      <MnlthTable data={stateData} />
      {
        stateCommand === 'opening' ?
          <Typography sx={{margin: '.5rem', textAlign: 'center'}}>Max value loss: {roundToTwo(stateData[9].maxLoss)} ETH. (-{roundToTwo(stateData[9].maxLossPercent)}%)</Typography> : ''
      }
    </Layout>
  );
}
