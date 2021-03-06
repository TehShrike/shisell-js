import {AnalyticsContext} from '../AnalyticsContext';
import {withContext} from './withContext';

export function withIdentity(key: string, value: any) {
  const newContext = new AnalyticsContext();
  newContext.Identities[key] = value;
  return withContext(newContext);
}
