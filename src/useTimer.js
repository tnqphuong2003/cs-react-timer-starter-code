import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [splitList, setSplitList] = useState([]);

  // const isStart = useRef();
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    refInterval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    active.current.disabled = false;
    setTime(ini);
    setSplitList([]);
  };
  const splitTimer = () => {
    // if (!active.current.disabled) return;
    console.log(time);
    setSplitList([...splitList, time]);
  };
  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    splitList,
    active,
  };
};
export default useTimer;
