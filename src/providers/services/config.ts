import { getHubId, getUser } from '../cookies';

const config = () => ({
  Termo_Consentimento: 'Aceito',
  id_produto: getHubId(),
  historico_id: getUser(),
});

export default config;
