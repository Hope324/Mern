
import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock';
function App() {
  const [timerdays, setTimerDays] = useState();
  const [timerhours, setTimerHours] = useState();
  const [timerminutes, setTimerMinutes] = useState();
  const [timerseconds, setTimerSeconds] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("Aug 11,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60);
      const minutes = Math.floor(distance % (60 * 60 * 1000)) / (1000 * 60);
      const seconds = Math.floor(distance % (60 * 1000)) / (1000);
      if (distance < 0) {
        clearInterval(interval.current)
      }
      else {
        //Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    })
  }
  useEffect(() => {
    startTimer();
  })
  return (
    <div className="App">
      <Clock
        timerdays={timerdays}
        timerhours={timerhours}
        timerminutes={timerminutes}
        timerseconds={timerseconds}
      />
    </div>
  );
}

export default App;
