import React, { useState, useEffect } from 'react';
import NqtAccountAdd from './NqtAccountAdd';

function NqtAccountList({ nqtAccountList, nqtOnAddNewAccount }) {
  const [, setNqtShowAddForm] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (typeof window.bootstrap === 'undefined') {
        const nqtScript = document.createElement('script');
        nqtScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
        nqtScript.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p';
        nqtScript.crossOrigin = 'anonymous';
        document.body.appendChild(nqtScript);
      }
    }
  }, []);

  const nqtHandleAddNewAccountClick = () => {
    setNqtShowAddForm(true);
  };

  const nqtHandleCloseForm = () => {
    setNqtShowAddForm(false);
    if (typeof window !== 'undefined' && window.bootstrap) {
      const nqtModalElement = document.getElementById('addAccountModal');
      const nqtModal = window.bootstrap.Modal.getInstance(nqtModalElement);
      if (nqtModal) {
        nqtModal.hide();
      }
    }
  };

  return (
    <div className="container mt-4">
      <div>
        <h3 className="mb-4 text-center alert alert-info">Danh sách sinh viên</h3>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {nqtAccountList.map((nqtAccount, nqtIndex) => (
              <tr key={nqtIndex}>
                <td>{nqtAccount.nqt_id}</td>
                <td>{nqtAccount.nqt_name}</td>
                <td>{nqtAccount.nqt_email}</td>
                <td>{nqtAccount.nqt_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          type="button"
          className="btn btn-primary mt-3"
          data-bs-toggle="modal"
          data-bs-target="#addAccountModal"
          onClick={nqtHandleAddNewAccountClick}
        >
          Thêm mới
        </button>
      </div>

      <NqtAccountAdd
        nqtOnAddAccount={nqtOnAddNewAccount}
        nqtOnCloseForm={nqtHandleCloseForm}
      />
    </div>
  );
}

export default NqtAccountList;