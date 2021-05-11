import axios from 'axios';

export default async function () {
    let headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
    };

    return axios.get(`https://api.github.com/users/rangyia/repos`, { headers })
        .then(res => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log("GitHub API Error: ", err);
        });
}