import React, {createContext, useEffect, useState} from 'react';
import { getUniqueId } from 'react-native-device-info';

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {
  const [UID, setUID] = useState('');
  const [session, setSession] = useState({
    laundryName: 'LavJeans'
  });
  const idleTime = 1 * 60 * 1000;

  useEffect(() => {
    getUid();
  }, []);

  async function getUid() {
    setUID(await getUniqueId());
  } 

  return (
    <GlobalContext.Provider
      value={{
        UID, idleTime,
        session, setSession
      }}>
      {children}
    </GlobalContext.Provider>
  );
}