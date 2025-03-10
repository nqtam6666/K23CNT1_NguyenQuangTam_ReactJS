import React, {useState} from 'react'

export default function NqtUseState() {
    // tạo state là count và hàm cập nhật state là setcount
    const [nqtcount, setCount] = useState(0)
    const nqtHandleTang = ()=>{
        setCount(nqtcount + 1)
    }
    return (
    <div className='alert alert-info'>
        <h2>Sử dụng userState</h2>
        
        <div>
            <div>Count: {nqtcount}</div>
            <button onClick={nqtHandleTang}>Tăng</button>
            <button></button>
            <button></button>
        </div>
    </div>
  )
}
