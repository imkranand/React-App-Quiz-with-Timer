import React, { useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

function Timer({ time, setTime }) {
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time, setTime]);

  const progress = (time / 10) * 100;

  return (
    <div className="mb-3" style={{ width: '100%', maxWidth: '500px' }}>
      <ProgressBar now={progress} label={`${time}s`} />
    </div>
  );
}

export default Timer;
