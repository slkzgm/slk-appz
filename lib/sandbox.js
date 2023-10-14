const axios = require('axios');

const baseURL = process.env.NEXT_PUBLIC_API_URL + 'sandbox/';

export async function requestSandboxAsset(cloneNumber) {
  if (!cloneNumber) return ;
  cloneNumber = parseInt(cloneNumber);
  if (!cloneNumber || cloneNumber < 1 || cloneNumber > 20011) return ;

  return (await axios.get(baseURL + cloneNumber)).data;
}
