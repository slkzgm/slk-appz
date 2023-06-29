import axios from "axios";

export async function requestEggToClone(eggId) {
    const baseURL = 'https://www.slkzgm.com/eggtoclone/';

    if (!eggId) return ;
    eggId = parseInt(eggId);

    return (await axios.get(baseURL + eggId)).data;
}

export async function requestUnclaimedClones() {
    return (await axios.get('https://slkzgm.com/eggscheck')).data;
}
