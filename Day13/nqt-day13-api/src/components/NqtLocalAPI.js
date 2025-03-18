import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NqtLocalAPI() {
  // State để lưu trữ danh sách người dùng
  const [nqtListUser, setNqtListUser] = useState([]);
  const url_api = 'http://localhost:3001/users';

  // Lấy danh sách từ API khi component được mount
  useEffect(() => {
    axios
      .get(url_api)
      .then((nqtResponse) => {
        setNqtListUser(nqtResponse.data);
      })
      .catch((error) => {
        console.log('Lỗi khi lấy dữ liệu:', error);
      });
  }, []); // Thêm dependency array rỗng để chỉ chạy 1 lần khi mount

  return (
    <div className="container mt-4">
      <h2>Đọc dữ liệu từ API Local</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Tên</th>
            <th scope="col">Tuổi</th>
            <th scope="col">Lớp</th>
            {/* <th scope="col">ID</th> */}
          </tr>
        </thead>
        <tbody>
          {nqtListUser.map((nqtItem, index) => (
            <tr key={index}>
              <td>{nqtItem.fullname}</td>
              <td>{nqtItem.age}</td>
              <td>{nqtItem.class}</td>
              {/* <td>{nqtItem.id}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}