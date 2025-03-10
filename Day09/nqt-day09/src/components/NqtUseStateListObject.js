import React, { useState } from 'react';

export default function NqtUseStateListObject() {
  const initialStudents = [
    { nqtID: 'S001', nqtName: 'Nguyễn Quang Tâm', nqtAge: 20, nqtClass: 'K23CNT1' },
  ];
  const [nqtStudents, setNqtStudents] = useState(initialStudents);

  // Map through students to create table rows
  const nqtElements = nqtStudents.map((nqtItem, index) => (
    <tr key={nqtItem.nqtID}>
      <td>{index + 1}</td>
      <td>{nqtItem.nqtID}</td>
      <td>{nqtItem.nqtName}</td>
      <td>{nqtItem.nqtAge}</td>
      <td>{nqtItem.nqtClass}</td>
      <td>
        <button>Sửa</button>
        <button>Xóa</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Lớp</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>{nqtElements}</tbody>
      </table>
    </div>
  );
}