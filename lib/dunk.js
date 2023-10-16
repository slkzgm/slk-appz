import axios from "axios";

export async function requestDunkDetails(dunkId) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL + 'dunk/';

    if (!dunkId) return ;
    dunkId = parseInt(dunkId);
    if (!dunkId || dunkId < 1 || dunkId > 20011) return ;

    return (await axios.get(baseURL + dunkId)).data;
}
