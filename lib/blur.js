const axios = require('axios');

export async function requestBlurAirdropInputs(url) {
  const baseURL = 'http://slkzgm.com/blur/airdrop/';
  const regex = /^https:\/\/airdrop\.blur\.foundation\/\?data=.*/

  if (!url) return {};
  if (!regex.test(url)) return {};

  return (await axios.post(baseURL, {
    url: url
  })).data;
}
