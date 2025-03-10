import React, { useEffect, useState } from 'react'

export default function NqtUseEffect1() {
    useEffect(()=>{
        console.log('useEffect (callback)')
    })
    useEffect(()=>
        console.log('useEffect (callback,[]) - chỉ 1 lần duy nhất'),[]
    )
    const [count, setCount] = useState(0)
    return (
        <div className='alert alert-danger'>
            <h2>useEffect</h2>
            <div className='btn btn-primary' onClick={()=>setCount(count+1)}>
                Click
            </div>
        </div>
    )
}
