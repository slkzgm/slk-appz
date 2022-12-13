const axios = require('axios');


export async function requestCirlSize(cirlId) {
  const baseURL = 'https://www.slkzgm.com/sizecheck/';

  if (!cirlId) return ;
  cirlId = parseInt(cirlId);
  if (!cirlId || cirlId < 1 || cirlId > 20011) return ;

  return (await axios.get(baseURL + cirlId)).data;
}

export async function findCirl(size, cw) {
  return (await axios.get(`https://slkzgm.com/cirlfind?size=${size}&cw=${cw}`)).data;
}