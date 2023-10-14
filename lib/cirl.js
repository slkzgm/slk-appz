const axios = require('axios');

export async function requestCirlDetails(cirlId) {
  const baseURL = 'http://slkzgm.com/cirldetails/';

  if (!cirlId) return ;
  cirlId = parseInt(cirlId);
  if (!cirlId || cirlId < 1 || cirlId > 20011) return ;

  return (await axios.get(baseURL + cirlId)).data;
}

export async function findCirl(size, cw, onlyHubbed) {
  return (await axios.get(`http://slkzgm.com/cirlfind?size=${size}&cw=${cw}&onlyHubbed=${onlyHubbed}`)).data;
}
