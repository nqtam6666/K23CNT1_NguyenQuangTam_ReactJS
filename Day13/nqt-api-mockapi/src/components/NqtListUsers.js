import React from 'react'

import NqtAxiosUsers from '../api/Nqt_api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NqtListUsers() {
    const navigate = useNavigate();
    const [NqtListUser, setNqtListUser] = useState([]);
    const NqtGetAllUser = async()=>{
        //Goi API lay du lieu
        const Nqt_resp = await NqtAxiosUsers.get("/Nqt_users");
        setNqtListUser(Nqt_resp.data);
    }
    
    // Gọi API và lấy dữ liệu cho biến state (NqtListUser)
    useEffect(()=>{
        NqtGetAllUser()
    },[])

    const NqtHandleUpdate = (NqtId)=>{
        console.log("id:",NqtId);

        navigate(`/edit-user/${NqtId}`);
    }
    const NqtHandleDelete = async (NqtId)=>{
        await NqtAxiosUsers.delete("/Nqt_users/"+NqtId);

        let NqtListUserDelete = NqtListUser.filter(x=>x.id !==NqtId);
        setNqtListUser(NqtListUserDelete);
    }
    const NqtElementUser = NqtListUser.map((Nqt_user)=>{
        return <tr key={Nqt_user.id}>
            <td>{Nqt_user.id}</td>
            <td>{Nqt_user.Nqt_name}</td>
            <td>{Nqt_user.Nqt_email}</td>
            <td>{Nqt_user.Nqt_phone}</td>
            <td>{Nqt_user.Nqt_active?'Hoạt động':'Khóa'}</td>
            <td>
                <button onClick={()=>NqtHandleUpdate(Nqt_user.id)}>Update</button>
                <button onClick={()=>NqtHandleDelete(Nqt_user.id)}>Delete</button>
            </td>
        </tr>
    })

  return (
    <div>
        <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {NqtElementUser}
                </tbody>
            </table>
    </div>
  )
}
