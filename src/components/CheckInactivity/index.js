import { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { InactivityWrapper } from "./styles";
import { InteractionManager } from "react-native";

export default function CheckInactivity({children}) {
  // const INACTIVITY_TIMEOUT = 10000; 
  const INACTIVITY_TIMEOUT = 10 * 60 * 1000; 
  const lastInteractionTimeRef = useRef(Date.now());
  const inactivityTimeoutRef = useRef();
  const navigation = useNavigation();

  function checkInactivity() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastInteractionTimeRef.current;

    if (elapsedTime >= INACTIVITY_TIMEOUT) {
      console.log('Usuário inativo');
      navigation.navigate('LoadPage');
    }

    inactivityTimeoutRef.current = setTimeout(checkInactivity, INACTIVITY_TIMEOUT);
  }

  function handleInteraction() {
    console.log('interagiu');
    lastInteractionTimeRef.current = Date.now();
    InteractionManager.runAfterInteractions(() => {
    });
  }

  useEffect(() => {
    checkInactivity();
    return () => {
      clearTimeout(inactivityTimeoutRef.current);
    };
  }, []);
  return (
    <InactivityWrapper onPress={handleInteraction}>
      {children}
    </InactivityWrapper>
  )
}