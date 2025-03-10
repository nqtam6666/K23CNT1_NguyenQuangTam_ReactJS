import React, { useState } from 'react'

export default function NqtBai1() {
  const [count, setCount]  = useState(0)
  return (
    <div className='mt-3'>
      <hr />
      <h2>Bộ đếm: { count}</h2>
      <div>
        <div className='btn btn-danger mx-2' onClick={()=>setCount(count+1)}>Tăng</div>
        <div className='btn btn-primary mx-2' onClick={()=>setCount(count-1)}>Giảm</div>
        <div className='btn btn-info mx-2' onClick={()=>setCount(0)}>Đặt lại</div>
      </div>
      
    </div>
  )
}
