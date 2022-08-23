const axios = require('axios');

const baseURL = 'https://www.slkzgm.com/sandbox/';

export async function requestSandboxAsset(cloneNumber) {
  if (!cloneNumber) return ;
  cloneNumber = parseInt(cloneNumber);
  if (!cloneNumber || cloneNumber < 1 || cloneNumber > 20011) return ;

  return (await axios.get(baseURL + cloneNumber)).data;
}
