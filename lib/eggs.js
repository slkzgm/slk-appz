import axios from "axios";

export async function requestEggToClone(eggId) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL + 'eggtoclone/';

    if (!eggId) return ;
    eggId = parseInt(eggId);

    return (await axios.get(baseURL + eggId)).data;
}

export async function requestUnclaimedClones() {
    return (await axios.get(process.env.NEXT_PUBLIC_API_URL + 'eggscheck')).data;
}
