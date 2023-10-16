const baseURL = process.env.NEXT_PUBLIC_API_URL + 'slkappz/';

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
      case 'claimcheck':
        url = baseURL + 'claimcheck';
        break;
      case 'eggs':
        url = baseURL + 'eggs';
        break;
      case 'dunk':
        url = baseURL + 'dunk';
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
