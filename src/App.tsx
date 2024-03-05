import React from 'react';
import { PomodoroTimer } from './hooks/components/pomodoro-timer';
import { JsxElement } from 'typescript';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer PomodoroTime={10} shortRestTime={2} longRestTime={5}
      cycles={4}
      />
    </div>
  );
}

export default App;
