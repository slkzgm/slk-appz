import React from 'react';
import {requestMnlthAPI} from "../lib/mnlth";
import MnlthTable from "../components/MnlthTable";
import {Button} from "@mui/material";
import Layout from "../components/Layout";
import {styled} from "@mui/material/styles";

const CommandButton = styled(Button)({
  margin: '.25rem'
});

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
        <div style={{textAlign:'center'}}>
          <CommandButton size={'small'} variant={"contained"}  onClick={() => handleClick('diff')}>diff!</CommandButton>
          <CommandButton size={'small'} variant={"contained"}  onClick={() => handleClick('dunk')}>dunk!</CommandButton>
          <CommandButton size={'small'} variant={"contained"}  onClick={() => handleClick('floor')}>floor!</CommandButton>
          <CommandButton size={'small'} variant={"contained"}  onClick={() => handleClick('left')}>left!</CommandButton>
          <CommandButton size={'small'} variant={"contained"}  onClick={() => handleClick('opening')}>opening!</CommandButton>
          <CommandButton size={'small'} variant={"contained"}  onClick={() => handleClick('revealed')}>revealed!</CommandButton>
          <CommandButton size={'small'} variant={"contained"}  onClick={() => handleClick('skinvials')}>skinVials!</CommandButton>
          <CommandButton size={'small'} variant={"contained"}  onClick={() => handleClick('target')}>target!</CommandButton>
        </div>
        <MnlthTable data={stateData} />
        {
          stateCommand === 'opening' ?
            <div>Max value loss: {stateData[9].maxLoss} ETH. ({stateData[9].maxLossPercent}%)</div> : ''
        }
      </Layout>
  );
}
