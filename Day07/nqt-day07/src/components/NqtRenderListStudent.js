import React, { Component } from 'react';

export default class NqtRenderListStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nqtStudents: [
        {
          nqtID: "S001",
          nqtName: "Nguyễn Quang Tâm",
          nqtAge: 20,
          nqtClass: "K23CNT1",
        },
        {
          nqtID: "S002",
          nqtName: "Nguyễn Quang A",
          nqtAge: 20,
          nqtClass: "K23CNT1",
        },
        {
          nqtID: "S003",
          nqtName: "Nguyễn Quang B",
          nqtAge: 20,
          nqtClass: "K23CNT1",
        },
        {
          nqtID: "S004",
          nqtName: "Nguyễn Quang C",
          nqtAge: 20,
          nqtClass: "K23CNT1",
        },
      ],
    };
  }

  render() {
    const nqtElements = this.state.nqtStudents.map((nqtItem, index) => {
      return (
        <tr key={nqtItem.nqtID}>
          <td>{index + 1}</td>
          <td>{nqtItem.nqtID}</td>
          <td>{nqtItem.nqtName}</td>
          <td>{nqtItem.nqtAge}</td>
          <td>{nqtItem.nqtClass}</td>
          <td>
            <button className='btn btn-primary mx-2'>Sửa</button>
            <button className='btn btn-danger'>Xóa</button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Danh sách sinh viên</h2>
        <table className='table border border-1 table-bordered'>
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
}