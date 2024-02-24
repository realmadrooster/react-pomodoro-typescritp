import React from 'react';
import { PomodoroTimer } from './hooks/components/pomodoro-timer';
import { JsxElement } from 'typescript';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={1500} />
    </div>
  );
}

export default App;
