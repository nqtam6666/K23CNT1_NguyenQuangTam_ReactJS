import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NqtAxiosUsers from "../api/Nqt_api";

export default function NqtCreateUser() {
  const navigate = useNavigate();
  const [Nqt_formData, setNqt_formData] = useState({
    nqt_name: "",
    nqt_email: "",
    nqt_phone: "",
    nqt_active: true,
  });
  const [Nqt_errors, setNqt_errors] = useState({});
  const [Nqt_alert, setNqt_alert] = useState(null);

  const Nqt_handleChange = (e) => {
    const { name, value, type } = e.target;
    setNqt_formData({
      ...Nqt_formData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!Nqt_formData.nqt_name.trim())
      errors.nqt_name = "Vui lòng nhập họ và tên!";
    if (!Nqt_formData.nqt_email.trim()) {
      errors.nqt_email = "Vui lòng nhập email!";
    } else if (!/\S+@\S+\.\S+/.test(Nqt_formData.nqt_email)) {
      errors.nqt_email = "Email không hợp lệ!";
    }
    if (!Nqt_formData.nqt_phone.trim()) {
      errors.nqt_phone = "Vui lòng nhập số điện thoại!";
    } else if (!/^\d{10,11}$/.test(Nqt_formData.nqt_phone)) {
      errors.nqt_phone = "Số điện thoại không hợp lệ!";
    }
    setNqt_errors(errors);
    return Object.keys(errors).length === 0;
  };
  const Nqt_handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Nqt_formData:", Nqt_formData);

    try {
      await NqtAxiosUsers.post("/nqt_users", Nqt_formData);
      setNqt_alert({ type: "success", message: "Thêm user thành công!" });
      setTimeout(() => {
        setNqt_alert(null);
        navigate("/list-user");
      }, 1000);
    } catch (error) {
      console.error("Lỗi khi thêm user:", error);
      setNqt_alert({ type: "danger", message: "Lỗi khi thêm user!" });
      setTimeout(() => setNqt_alert(null), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Form Thêm Mới User</h2>

      {Nqt_alert && (
        <div
          className={`alert alert-${Nqt_alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {Nqt_alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setNqt_alert(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={Nqt_handleSubmit}>
        {/* Họ và Tên */}
        <div className="mb-3">
          <label htmlFor="nqt_name" className="form-label">
            Họ và Tên
          </label>
          <input
            type="text"
            className={`form-control ${
              Nqt_errors.nqt_name ? "is-invalid" : ""
            }`}
            id="nqt_name"
            name="nqt_name"
            value={Nqt_formData.nqt_name}
            onChange={Nqt_handleChange}
            placeholder="Nhập họ và tên"
          />
          {Nqt_errors.nqt_name && (
            <div className="invalid-feedback">{Nqt_errors.nqt_name}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="nqt_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              Nqt_errors.nqt_email ? "is-invalid" : ""
            }`}
            id="nqt_email"
            name="nqt_email"
            value={Nqt_formData.nqt_email}
            onChange={Nqt_handleChange}
            placeholder="Nhập email"
          />
          {Nqt_errors.nqt_email && (
            <div className="invalid-feedback">{Nqt_errors.nqt_email}</div>
          )}
        </div>

        {/* Số điện thoại */}
        <div className="mb-3">
          <label htmlFor="nqt_phone" className="form-label">
            Số Điện Thoại
          </label>
          <input
            type="text"
            className={`form-control ${
              Nqt_errors.nqt_phone ? "is-invalid" : ""
            }`}
            id="nqt_phone"
            name="nqt_phone"
            value={Nqt_formData.nqt_phone}
            onChange={Nqt_handleChange}
            placeholder="Nhập số điện thoại"
          />
          {Nqt_errors.nqt_phone && (
            <div className="invalid-feedback">{Nqt_errors.nqt_phone}</div>
          )}
        </div>

        {/* Trạng thái */}
        <div className="mb-3">
          <label className="form-label">Trạng Thái</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="nqt_active_true"
              name="nqt_active"
              value="true"
              checked={Nqt_formData.nqt_active === true}
              onChange={Nqt_handleChange}
            />
            <label className="form-check-label" htmlFor="nqt_active_true">
              Hoạt động
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="nqt_active_false"
              name="nqt_active"
              value="false"
              checked={Nqt_formData.nqt_active === false}
              onChange={Nqt_handleChange}
            />
            <label className="form-check-label" htmlFor="nqt_active_false">
              Khóa
            </label>
          </div>
        </div>

        {/* Nút Thêm Mới */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Thêm Mới
          </button>
        </div>
      </form>
    </div>
  );
}
