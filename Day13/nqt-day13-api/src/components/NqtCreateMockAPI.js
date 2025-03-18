// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function NqtCreateMockAPI() {
    // khởi tạo state
    const [NqtFullName,setNqtFullName] = useState('')
    const [NqtAge,setNqtAge] = useState(0)
    const [NqtActive,setNqtActive] = useState(true)

    // api post
    const NqtCreateUserApi = "https://67d8e4cb00348dd3e2a896c4.mockapi.io/K23CNT1_NguyenQuangTam/users";

    // khi submit form
    const NqtHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("NqtActive:",NqtActive);
        let NqtNewUser = {NqtFullName,NqtAge,NqtActive};
        console.log(NqtNewUser);

        // ghi dữ liệu vào api
        axios
            .post(NqtCreateUserApi, NqtNewUser)
            .then((Nqt_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="NqtFullName">Full Name</label>
                <input type='text' name='NqtFullName' id="NqtFullName" 
                    value={NqtFullName}
                    onChange={(ev)=>setNqtFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="NqtAge">Age</label>
                <input type='number' name='NqtAge' id="NqtAge" 
                    value={NqtAge}
                    onChange={(ev)=>setNqtAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="NqtActive">Active</label>
                <input type='radio' name='NqtActive' id="NqtActive_hd" value={'true'} 
                    onChange={(ev)=>setNqtActive(ev.target.value)} />
                    <label for="NqtActive_hd"> Hoạt động</label>
                <input type='radio' name='NqtActive' id="NqtActive_kh" value={'false'} 
                    onChange={(ev)=>setNqtActive(ev.target.value)}/>
                    <label for="NqtActive_kh"> Khóa</label>
            </div>
            <button onClick={NqtHandleSubmit}>Create</button>
        </form>
    </div>
  )
}
