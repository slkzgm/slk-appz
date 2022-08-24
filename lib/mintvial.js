import axios from "axios";

const baseURL = 'http://localhost:3000/mintvials/';

export async function requestMintvialAPI(command) {
  let response;

  if (!command) {
    response = await axios.get(baseURL);
    return response.data;
  } else {
    switch (command) {
      case 'all':
        response = await axios.get(baseURL);
        break;
      case 'diff':
        response = await axios.get(baseURL + 'diff');
        break;
      case 'floor':
        response = await axios.get(baseURL + 'floor');
        break;
      case 'left':
        response = await axios.get(baseURL + 'left');
        break;
      case 'opening':
        response = await axios.get(baseURL + 'opening');
        break;
      case 'revealed':
        response = await axios.get(baseURL + 'revealed');
        break;
      case 'target':
        response = await axios.get(baseURL + 'target');
        break;
      case 'default':
        response = await axios.get(baseURL + 'floor');
        break;
    }
    return response.data;
  }
}
