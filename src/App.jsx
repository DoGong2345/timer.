
import React, { useState, useRef } from 'react';


function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds(prev => Math.round((prev + 0.01) * 100) / 100);
      }, 10);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <style>{`
        .timer-mono {
          font-size: 2rem;
          margin: 20px 0;
          font-family: 'Roboto Mono', 'Consolas', 'Menlo', 'Monaco', monospace;
          font-variant-numeric: tabular-nums;
        }
      `}</style>
      <h2>타이머 웹사이트</h2>
      <div className="timer-mono">{seconds.toFixed(2)}초</div>
      <button onClick={startTimer} disabled={isRunning} style={{ marginRight: 8 }}>시작</button>
      <button onClick={pauseTimer} disabled={!isRunning} style={{ marginRight: 8 }}>일시정지</button>
      <button onClick={resetTimer}>리셋</button>
    </div>
  );
}

export default App;
