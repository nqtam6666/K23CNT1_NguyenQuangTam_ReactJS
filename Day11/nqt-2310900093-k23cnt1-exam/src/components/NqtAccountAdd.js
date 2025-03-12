import React, { useState, useEffect } from 'react';

function NqtAccountAdd({ nqtOnAddAccount, nqtOnCloseForm }) {
  const [nqtNewAccount, setNqtNewAccount] = useState({
    nqt_id: '',
    nqt_name: '',
    nqt_email: '',
    nqt_amount: '',
  });

  useEffect(() => {
    const nqtModalElement = document.getElementById('addAccountModal');
    if (nqtModalElement) {
      nqtModalElement.addEventListener('hidden.bs.modal', () => {
        setNqtNewAccount({ nqt_id: '', nqt_name: '', nqt_email: '', nqt_amount: '' });
      });
    }
  }, []);

  const nqtHandleChange = (e) => {
    const { name, value } = e.target;
    setNqtNewAccount({ ...nqtNewAccount, [name]: value });
  };

  const nqtHandleSubmit = (e) => {
    e.preventDefault();
    if (
      nqtNewAccount.nqt_id &&
      nqtNewAccount.nqt_name &&
      nqtNewAccount.nqt_email &&
      nqtNewAccount.nqt_amount
    ) {
      nqtOnAddAccount(nqtNewAccount);
      setNqtNewAccount({ nqt_id: '', nqt_name: '', nqt_email: '', nqt_amount: '' });
      nqtOnCloseForm();  
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  };

  return (
    <div
      className="modal fade"
      id="addAccountModal"
      tabIndex="-1"
      aria-labelledby="addAccountModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addAccountModalLabel">
              Thêm mới tài khoản
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={nqtOnCloseForm}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={nqtHandleSubmit}>
              <div className="mb-3">
                <label htmlFor="nqt_id" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nqt_id"
                  name="nqt_id"
                  value={nqtNewAccount.nqt_id}
                  onChange={nqtHandleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nqt_name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nqt_name"
                  name="nqt_name"
                  value={nqtNewAccount.nqt_name}
                  onChange={nqtHandleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nqt_email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="nqt_email"
                  name="nqt_email"
                  value={nqtNewAccount.nqt_email}
                  onChange={nqtHandleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nqt_amount" className="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="nqt_amount"
                  name="nqt_amount"
                  value={nqtNewAccount.nqt_amount}
                  onChange={nqtHandleChange}
                />
              </div>
              <div className="modal-footer p-0 pt-3">
                <button type="submit" className="btn btn-success me-2">
                  Thêm tài khoản
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={nqtOnCloseForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NqtAccountAdd;