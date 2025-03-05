import React, { Component } from "react";
import NqtStudent from "./NqtStudent";

export default class NqtStudenList extends Component {
  constructor(props) {
    super(props);
  }
  nqtHandleView = (NqtStudent)=>{
    //chuyển dữ liệu lên nqtApp
    this.props.onNqtHandleView(NqtStudent)
  }
  render() {
    //lấy dữ liệu từ props nqtApp xuống
    let { renderNqtStudents } = this.props;
    console.log(renderNqtStudents)
    //chuyển dữ liệu vào nqtStudent để hiển thị 
    let nqtElementStudent = renderNqtStudents.map((nqtItem, index)=>{
        return <NqtStudent nqtkey = {index} renderNqtStudent = {nqtItem} onNqtHandleView = {this.nqtHandleView}/>
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
                {nqtElementStudent}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
