import { apiEndpoints, apiServicePath } from "../constants";

const fetchTeams = async () => {
    try {
        const response = await fetch(`${apiServicePath}${apiEndpoints.teams}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });

        if (response.status === 404 || response.status == 400) {
            console.log('Error');
        }
        // const { teams } = await response.json()

        return response;
    } catch (err) {
        console.error(err);
    }
}

export default fetchTeams;