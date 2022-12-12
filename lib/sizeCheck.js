const axios = require('axios');

const baseURL = 'https://www.slkzgm.com/sizecheck/';

export async function requestCirlSize(cirlId) {
  if (!cirlId) return ;
  cirlId = parseInt(cirlId);
  if (!cirlId || cirlId < 1 || cirlId > 20011) return ;

  return (await axios.get(baseURL + cirlId)).data;
}
