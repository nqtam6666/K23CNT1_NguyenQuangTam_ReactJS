import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NqtAxiosUsers from '../api/Nqt_api';

export default function NqtListUsers() {
  const navigate = useNavigate();
  const [nqtListUser, setNqtListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null); // State for custom alerts

  const nqtGetAllUser = async () => {
    setIsLoading(true);
    try {
      const nqtResp = await NqtAxiosUsers.get('/nqt_users');
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
    setAlert({ type: 'success', message: 'Đã chuyển đến trang cập nhật!' });
    setTimeout(() => setAlert(null), 3000); // Auto-dismiss after 3 seconds
  };

  const nqtHandleDelete = async (nqtId) => {
    if (window.confirm('Bạn có chắc muốn xóa user này không?')) {
      try {
        await NqtAxiosUsers.delete(`/nqt_users/${nqtId}`);
        setNqtListUser(nqtListUser.filter((x) => x.id !== nqtId));
        setAlert({ type: 'danger', message: 'Đã xóa user thành công!' });
        setTimeout(() => setAlert(null), 3000);
      } catch (error) {
        console.error('Error deleting user:', error);
        setAlert({ type: 'danger', message: 'Lỗi khi xóa user!' });
        setTimeout(() => setAlert(null), 3000);
      }
    }
  };

  const nqtElementUser = nqtListUser.map((nqtUser) => (
    <tr key={nqtUser.id}>
      <td>{nqtUser.id}</td>
      <td>{nqtUser.nqt_name}</td>
      <td>{nqtUser.nqt_email}</td>
      <td>{nqtUser.nqt_phone}</td>
      <td>
        <span
          className={`badge ${
            nqtUser.nqt_active ? 'bg-success' : 'bg-danger'
          }`}
        >
          {nqtUser.nqt_active ? 'Hoạt động' : 'Khóa'}
        </span>
      </td>
      <td>
        <div className="btn-group" role="group">
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => nqtHandleUpdate(nqtUser.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => nqtHandleDelete(nqtUser.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh sách User</h2>

      {/* Custom Alert */}
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setAlert(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Đang tải...</span>
          </div>
          <p>Đang tải...</p>
        </div>
      ) : nqtListUser.length === 0 ? (
        <p className="text-center text-muted fst-italic">Không có dữ liệu để hiển thị.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-light">
              <tr>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{nqtElementUser}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}