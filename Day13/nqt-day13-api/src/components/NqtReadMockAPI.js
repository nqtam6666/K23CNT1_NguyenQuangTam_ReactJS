import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NqtReadMockAPI() {
    // khởi tạo state 
    const [NqtListUser, setNqtListUser] = useState([])
    // api
    const NqtApiOnline = "https://67d8e4cb00348dd3e2a896c4.mockapi.io/K23CNT1_NguyenQuangTam/users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(NqtApiOnline)
            .then((Nqt_response)=>{
                setNqtListUser(Nqt_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const NqtElementUser = NqtListUser.map((Nqt_item, index)=>{
        return(
            <tr>
                <td>{Nqt_item.id}</td>
                <td>{Nqt_item.nqtFullName}</td>
                <td>{Nqt_item.nqtAge}</td>
                <td>{Nqt_item.nqtStatus?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   NqtElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
