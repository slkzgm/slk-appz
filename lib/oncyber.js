const axios = require('axios');

export async function requestOncyberArtworksList(url) {
  const baseURL = 'https://slkzgm.com/oncyber/extractor/';
  const regex = /^https:\/\/oncyber\.io\/(spaces\/[a-zA-Z0-9]+|[a-zA-Z0-9]+)$/;

  if (!url) return [];
  if (!regex.test(url)) return [];

  return (await axios.post(baseURL, {
    url: url
  })).data;
}
