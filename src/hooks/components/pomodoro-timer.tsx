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
  const [resting, setResting] = React.useState(false);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [resting, working]); //acrescentei o resting

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.PomodoroTime);
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
      <Button text="Work" onClick={() => configureWork()}></Button>
      <Button text="Rest" onClick={() => configureRest(false)}></Button>
      <Button
      className={!working && !resting ? 'hidden' : ''}
      text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(!timeCounting)}></Button>
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
