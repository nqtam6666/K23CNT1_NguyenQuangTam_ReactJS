import React, {useState} from 'react'


export default function NqtButton() {
  const lists = ['1', '2']
  const [count, setCount] = useState(0)
  const [list, setList] = useState(lists)
  function handleList(){
    setList([
      ...list, 
      parseInt(Math.random() * 1000)
    ])
  }
  return (
    <div>
      <h2>Tìm hiểu về useState</h2>
      <div>
        <p>U clicked {count} times</p>
        <p>List: {list.toString()}</p>
        <button onClick={()=>setCount(count+1)}>ClickMe!</button>
        <button onClick={handleList}>ClickMe</button>
      </div>
    </div>
  )
}