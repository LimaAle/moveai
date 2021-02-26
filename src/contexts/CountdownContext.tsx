import { createContext, useState, ReactNode, useContext, useEffect } from 'react'
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  startCountdown: () => void;
  resetCountdown: () => void;
  minutes: number;
  seconds: number;
  hasFinished:boolean;
  isActive:boolean;
}

interface CountdownProviderProps {
  children: ReactNode;
}
export const CountdownContext = createContext({} as CountdownContextData);


let countDownTimeout: NodeJS.Timeout;


export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);
  const [time, setTime] = useState(2);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  function startCountdown() {
    setIsActive(true);
  }
  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(2);  
  }


  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])
  return (
    <CountdownContext.Provider value={{
      startCountdown,
      resetCountdown,
      minutes,
      seconds,
      hasFinished,
      isActive
    }}>
      {children}
    </CountdownContext.Provider>
  )
}