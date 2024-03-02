import React, { useEffect } from "react";
import { useInterval } from "../use-interval";
import { secondsToTime } from "../../utils/seconds-to-time";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
  PomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;

}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.PomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null);

  useEffect(() => {
    if (working) document.body.classList.add('working');
  }, [working]);

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
      <Button text="Work" onClick={() => configureWork()}></Button>
      <Button text="teste" onClick={() => console.log(1)}></Button>
      <Button text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(!timeCounting)}></Button>
      </div>

      <div className="details">
        <p>Testando 9a2000000</p>
        <p>Testando 9a2000000</p>
        <p>Testando 9a2000000</p>
        <p>Testando 9a2000000</p>
      </div>

    </div>
    );
  }
