import React from 'react';

const NqtFormStudent = ({ renderNqtStudent }) => {
  // Add form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', renderNqtStudent);
    // Add your submit logic here
  };

  return (
    <div className="card-body">
      <h3 className="card-title">Thông tin sinh viên</h3>
      <form className="form-sample" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Mã sinh viên</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              value={renderNqtStudent?.nqtID || ''}
              readOnly
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Tên sinh viên</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              value={renderNqtStudent?.nqtName || ''}
              readOnly
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Tuổi</label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              value={renderNqtStudent?.nqtAge || ''}
              readOnly
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Giới tính</label>
          <div className="col-sm-9">
            <select
              className="form-control"
              value={renderNqtStudent?.nqtGender || 'Nam'}
              disabled
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Ngày sinh</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="dd/mm/yyyy"
              value={renderNqtStudent?.nqtBirthday || ''}
              readOnly
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Nơi sinh</label>
          <div className="col-sm-9">
            <select
              className="form-control"
              value={renderNqtStudent?.nqtBirthPlace || 'HN'}
              disabled
            >
              <option value="HN">Hà Nội</option>
              <option value="HCM">TP. Hồ Chí Minh</option>
              <option value="DN">Đà Nẵng</option>
              <option value="QN">Quảng Ninh</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Địa chỉ</label>
          <div className="col-sm-9">
            <textarea
              className="form-control"
              value={renderNqtStudent?.nqtAdress || ''}
              readOnly
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NqtFormStudent;