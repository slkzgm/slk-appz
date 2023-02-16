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
      case 'mintvials':
        url = baseURL + 'mintvials';
        break;
      case 'sandbox':
        url = baseURL + 'sandbox';
        break;
      case 'market':
        url = baseURL + 'ecosystem';
        break;
      case 'sizecheck':
        url = baseURL + 'sizecheck';
        break;
      case 'oncyber':
        url = baseURL + 'oncyber';
        break;
      case 'blur':
        url = baseURL + 'blur'
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
