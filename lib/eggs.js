import axios from "axios";

export async function requestEggToClone(eggId) {
    const baseURL = 'http://slkzgm.com/eggtoclone/';

    if (!eggId) return ;
    eggId = parseInt(eggId);

    return (await axios.get(baseURL + eggId)).data;
}

export async function requestUnclaimedClones() {
    return (await axios.get('http://slkzgm.com/eggscheck')).data;
}
