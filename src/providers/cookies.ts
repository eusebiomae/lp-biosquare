import Cookie from 'js-cookie';

export const setVisit = (data: any) =>
  Cookie.set('hubid_visit', JSON.stringify(data), {
    expires: 7,
  });

export const getVisit = () => Cookie.get('hubid_visit');

export const setUser = (data: any) =>
  Cookie.set('hubid_user', data, { expires: 7 });

export const getUser = () => Cookie.get('hubid_user');

export const setHubId = (data: any) =>
  Cookie.set('hubid', data, { expires: 7 });

export const getHubId = () => Cookie.get('hubid');
