import axios from "axios";

const baseURL = 'https://www.slkzgm.tk/mnlth/';

async function getMnlthData() {
  const response = await axios.get(baseURL);

  return response.data;
}

async function getDiff() {
  const response = await axios.get(baseURL + 'diff');

  return response.data;
}

async function getDunk() {
  const response = await axios.get(baseURL + 'dunk');

  return response.data;
}

async function getFloor() {
  const response = await axios.get(baseURL + 'floor');

  return response.data;
}

async function getLeft() {
  const response = await axios.get(baseURL + 'left');

  return response.data;
}

async function getOpening() {
  const response = await axios.get(baseURL + 'opening');

  return response.data;
}

async function getRevealed() {
  const response = await axios.get(baseURL + 'revealed');

  return response.data;
}

async function getSkinVials() {
  const response = await axios.get(baseURL + 'skinvials');

  return response.data;
}

async function getTarget() {
  const response = await axios.get(baseURL + 'target');

  return response.data;
}

export async function requestMnlthAPI(command) {
  switch (command) {
    case 'all':
      return getMnlthData();
    case 'diff':
      return getDiff();
    case 'dunk':
      return getDunk();
    case 'floor':
      return getFloor();
    case 'left':
      return getLeft();
    case 'opening':
      return getOpening();
    case 'revealed':
      return getRevealed();
    case 'skinvials':
      return getSkinVials();
    case 'target':
      return getTarget();
    case 'default':
      return getFloor();
  }
}
