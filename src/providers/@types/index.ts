import { ReactElement } from 'react';

export interface VisitProps {
  referrer: string;
  page: string;
  user_agent: string;
  gclid?: string;
  fbclid?: string;
  utm_source?: string;
  resolution: string;
  date: string;
  ip: string;
  ga_clientid: string;
}

export interface EventsProps {
  data?: VisitProps;
  type: 'visit' | 'pageview' | 'lead';
  user_id?: number | null;
  lead_id?: string;
}

export interface ProviderProps {
  hubid: string;
  googleAnalytics?: string;
  googleTagManager?: string;
  children: ReactElement;
  loading: ReactElement;
}

export interface UserIdProps {
  messsage: number;
  status: string;
}
