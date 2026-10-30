import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Alert from './Alert';

export default function RouteNotice() {
  const location = useLocation();
  const [dismissedKey, setDismissedKey] = useState<string | null>(null);
  const notice = location.state?.notice;
  if (!notice || dismissedKey === location.key || typeof notice.title !== 'string' || typeof notice.message !== 'string') return null;
  return <Alert title={notice.title} message={notice.message} type="success" onClose={() => setDismissedKey(location.key)}/>;
}
