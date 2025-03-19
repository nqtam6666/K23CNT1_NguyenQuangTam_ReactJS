import React from 'react';
import { Link } from 'react-router-dom';

export default function NqtNavBar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Trang chủ</Link>
      <span style={separatorStyle}> | </span>
      <Link to="/list-user" style={linkStyle}>Danh sách User</Link>
      <span style={separatorStyle}> | </span>
      <Link to="/create-user" style={linkStyle}>Thêm mới User</Link>
    </nav>
  );
}

// Inline CSS styles
const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '15px',
  backgroundColor: '#f4f4f4',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  padding: '8px 15px',
  transition: 'color 0.3s ease, background-color 0.3s ease',
};

const separatorStyle = {
  color: '#888',
  margin: '0 5px',
};

// Optional: Add hover effect using a CSS-in-JS approach
const hoverEffect = `
  a:hover {
    color: #007BFF;
    background-color: #e9ecef;
    border-radius: 4px;
  }
`;