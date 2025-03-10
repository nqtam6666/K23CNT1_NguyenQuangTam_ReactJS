import React, { useState, useEffect } from 'react';

export default function NqtButton() {
  const initialList = ['1', '2'];
  const [count, setCount] = useState(0);
  const [list, setList] = useState(initialList);

  // Side effect: Log khi count hoặc list thay đổi
  useEffect(() => {
    console.log('Count hoặc List đã thay đổi:', { count, list });
    document.title = `Click ${count} lần - List: ${list.join(', ')}`; // Cập nhật title
    return () => {
      console.log('Cleanup trước khi re-render lần sau');
    };
  }, [count, list]); // Chỉ chạy khi count hoặc list thay đổi

  // Hàm thêm số ngẫu nhiên vào danh sách
  const handleList = () => {
    setList([...list, Math.floor(Math.random() * 1000)]);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Tìm hiểu về useState và useEffect</h2>
      <div>
        <p>Bạn đã click {count} lần</p>
        <p>Danh sách: 
          {list.map((item, index) => (
            <span key={index}> {item}{index < list.length - 1 ? ', ' : ''}</span>
          ))}
        </p>
        <div style={{ marginTop: '10px' }}>
          <button 
            onClick={() => setCount(count + 1)} 
            style={{ marginRight: '10px', padding: '8px 16px' }}
          >
            Click Me!
          </button>
          <button 
            onClick={handleList} 
            style={{ padding: '8px 16px' }}
          >
            Add Random Number
          </button>
        </div>
      </div>
    </div>
  );
}