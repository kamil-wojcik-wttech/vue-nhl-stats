import { apiEndpoints, apiServicePath } from "../constants";

const fetchPlayers = async () => {
    try {
        const res = await fetch(`${apiServicePath}${apiEndpoints.players}`, {
            mode: 'no-cors',
            method: 'get',
            headers: {
                'content-type': 'application/json',
            }
        });
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}

export default fetchPlayers;