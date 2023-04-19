import { useState, useEffect } from 'react';

function useTimer(duration: number): [number, () => void, () => void] {
  const [time, setTime] = useState<number>(duration);
  const [started, setStarted] = useState<boolean>(false);
  let interval: NodeJS.Timeout;

  useEffect(() => {

    if (started) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [duration, started]);

  const startTimer = () => {
    setStarted(true);
  };

  const stop = () => {
    clearInterval(interval);
    setTime(duration);
    setStarted(false);
  };

  return [time, startTimer, stop];
}

export default useTimer;