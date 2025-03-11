import React, { useState, useEffect } from 'react';

export default function NqtUseEffect() {
  const [tvcCount, setTvcCount] = useState(0);

  useEffect(() => {
    console.log("Đã chạy useEffect với tham số []");
  }, []);

  useEffect(() => {
    console.log("Đã chạy useEffect với tham số [tvcCount] - Được gọi duy nhất khi tvcCount thay đổi");
  }, [tvcCount]);

  return (
    <div className="alert alert-info">
      <h2>Demo useEffect</h2>
      <h3>Count: {tvcCount}</h3>
      <button onClick={() => setTvcCount(tvcCount + 1)}>Increment</button>
      <button onClick={() => setTvcCount(tvcCount - 1)} disabled={tvcCount === 0}>
        Decrement
      </button>
    </div>
  );
}