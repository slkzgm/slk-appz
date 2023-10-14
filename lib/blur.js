const axios = require('axios');

export async function requestBlurAirdropInputs(url) {
  const baseURL = process.env.NEXT_PUBLIC_API_URL + 'blur/airdrop/';
  const regex = /^https:\/\/airdrop\.blur\.foundation\/\?data=.*/

  if (!url) return {};
  if (!regex.test(url)) return {};

  return (await axios.post(baseURL, {
    url: url
  })).data;
}
