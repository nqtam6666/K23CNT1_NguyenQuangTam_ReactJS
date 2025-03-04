import React from 'react'

export default function NqtRenderList() {
  const nqtNames = ['Tâm', 'Anh', 'Hiếu', 'Quân']
  const nqtElementName = nqtNames.map((item)=>{
    return (<li>{item}</li>)
  })
    return (
    <div>
        <h2>Danh sách</h2>
        {nqtElementName}
    </div>
  )
}
