import axios from "axios";

const baseURL = 'https://www.slkzgm.com/mnlth/';

export async function requestMnlthAPI(command) {
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
      case 'dunk':
        response = await axios.get(baseURL + 'dunk');
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
      case 'skinvials':
        response = await axios.get(baseURL + 'skinvials');
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
