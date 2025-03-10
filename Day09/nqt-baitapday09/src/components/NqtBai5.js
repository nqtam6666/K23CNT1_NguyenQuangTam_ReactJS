import React, { useState, useEffect } from 'react';

function NqtBai5() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className='alert alert-danger'>
      <h2>Giá trị: {count}</h2>
      <button className='btn btn-danger mx-1' onClick={() => setRunning(!running)}>
        {running ? "Dừng" : "Bắt đầu"}
      </button>
      <button className='btn btn-danger mx-1' onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default NqtBai5;
