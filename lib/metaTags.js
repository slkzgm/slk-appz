const baseURL = 'https://www.slkzgm.com/slkappz/';

export async function requestMetaTagAPI(command) {
  let data = null;
  let url;

  if (!command) {
    url = baseURL;
  } else {
    switch (command) {
      case 'mnlth':
        url = baseURL + 'mnlth';
        break;
      case 'mintvial':
        url = baseURL + 'mintvial';
        break;
      default:
        url = baseURL;
        break;
    }
  }
  await fetch(url)
    .then(response => response.json())
    .then(json => {data = json})

  return data;
}
