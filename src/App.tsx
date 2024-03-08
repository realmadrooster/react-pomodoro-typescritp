import React from 'react';
import { PomodoroTimer } from './hooks/components/pomodoro-timer';
import { JsxElement } from 'typescript';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer PomodoroTime={1500} shortRestTime={300} longRestTime={900}
      cycles={4}
      />
    </div>
  );
}

export default App;
