import React from 'react';
import {requestMnlthAPI} from "../lib/mnlth";
import MnlthTable from "../components/MnlthTable";
import {Button} from "@mui/material";
import Layout from "../components/Layout";

export async function getServerSideProps(context) {
  const data = await requestMnlthAPI('floor');

  return {
    props: {
      data
    }
  };
}

export default function Mnlth( { data }) {
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
      <section>
        <Button onClick={() => handleClick('diff')}>diff!</Button>
        <Button onClick={() => handleClick('dunk')}>dunk!</Button>
        <Button onClick={() => handleClick('floor')}>floor!</Button>
        <Button onClick={() => handleClick('left')}>left!</Button>
        <Button onClick={() => handleClick('opening')}>opening!</Button>
        <Button onClick={() => handleClick('revealed')}>revealed!</Button>
        <Button onClick={() => handleClick('skinvials')}>skinVials!</Button>
        <Button onClick={() => handleClick('target')}>target!</Button>
      </section>
      <MnlthTable data={stateData} />
      {
        stateCommand === 'opening' ?
          <div>Max value loss: {stateData[9].maxLoss} ETH. ({stateData[9].maxLossPercent}%)</div> : ''
      }
    </Layout>
  );
}
