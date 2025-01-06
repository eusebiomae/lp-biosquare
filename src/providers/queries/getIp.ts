import axios from 'axios';

const getIp = async () =>
  await axios
    .get(`https://api.ipify.org/?format=json`)
    .then(resp => resp.data.ip);

export default getIp;
