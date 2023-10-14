import axios from "axios";

export async function requestClaimCheckDetails(cloneId) {
    const baseURL = 'http://www.slkzgm.com/claimcheck/';

    if (!cloneId) return ;
    cloneId = parseInt(cloneId);
    if (!cloneId || cloneId < 1 || cloneId > 20011) return ;

    return (await axios.get(baseURL + cloneId)).data;
}
