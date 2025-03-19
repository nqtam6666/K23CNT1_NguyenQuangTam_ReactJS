import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NqtAxiosUsers from '../api/Nqt_api';
import '../../src/App.css'; // Assuming App.css is in the same directory or adjust the path

export default function NqtListUsers() {
  const navigate = useNavigate();
  const [nqtListUser, setNqtListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const nqtGetAllUser = async () => {
    setIsLoading(true);
    try {
      const nqtResp = await NqtAxiosUsers.get('/users');
      setNqtListUser(nqtResp.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    nqtGetAllUser();
  }, []);

  const nqtHandleUpdate = (nqtId) => {
    console.log('id:', nqtId);
    navigate(`/edit-user/${nqtId}`);
  };

  const nqtHandleDelete = async (nqtId) => {
    if (window.confirm('Bạn có chắc muốn xóa user này không?')) {
      try {
        await NqtAxiosUsers.delete(`/Nqt_users/${nqtId}`);
        setNqtListUser(nqtListUser.filter((x) => x.id !== nqtId));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const nqtElementUser = nqtListUser.map((nqtUser) => (
    <tr key={nqtUser.id}>
      <td>{nqtUser.id}</td>
      <td>{nqtUser.nqtFullName}</td>
      <td>{nqtUser.nqtAge}</td>
      <td>{nqtUser.nqtStatus ? 'Hoạt động' : 'Khóa'}</td>
      <td>
        <button className="update-btn" onClick={() => nqtHandleUpdate(nqtUser.id)}>
          Update
        </button>
        <button className="delete-btn" onClick={() => nqtHandleDelete(nqtUser.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <h2 className="header">Danh sách User</h2>
      {isLoading ? (
        <p className="loading">Đang tải...</p>
      ) : nqtListUser.length === 0 ? (
        <p className="no-data">Không có dữ liệu để hiển thị.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{nqtElementUser}</tbody>
        </table>
      )}
    </div>
  );
}