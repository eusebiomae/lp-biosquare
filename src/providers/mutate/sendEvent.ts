import axios from 'axios';
import { EventsProps } from '../@types';
import { setUser } from '../cookies';

const sendEvents = async ({
  data,
  type,
  user_id,
  lead_id,
}: EventsProps) => {
  const customData = lead_id ? { lead_id } : data;

  return await axios
    .post(
      'https://evento.hubid360.com.br',
      {
        historico_id: user_id,
        evento: type,
        navegacao: '[' + JSON.stringify(customData) + ']',
        page: window.document.location.pathname,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    .then((resp: any) => setUser(resp.data.message));
};

export default sendEvents;
