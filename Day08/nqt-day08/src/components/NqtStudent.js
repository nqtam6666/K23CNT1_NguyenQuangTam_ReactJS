import React, { Component } from 'react'

export default class NqtStudent extends Component {
    constructor(props){
        super(props)

    }
    //Hàm xử lý chức năng xem
    nqtHandleView = (nqtStudent) => {
        this.props.onNqtHandleView(nqtStudent)
    }
    render() {
    //lấy đối tượng renderNqtStudent chuyển từ nqtStudentList
    let {nqtkey, renderNqtStudent } = this.props;
    console.log(nqtkey, renderNqtStudent)
    return (
        <>
        <tr>
              <td>{nqtkey}</td>
              <td>{renderNqtStudent.nqtID}</td>
              <td>{renderNqtStudent.nqtName}</td>
              <td>{renderNqtStudent.nqtAge}</td>
              <td>{renderNqtStudent.nqtGender}</td>
              <td>
                <div className="template-demo">
                  <button
                    type="button"
                    className="btn btn-danger btn-icon-text"
                    onClick={()=>this.nqtHandleView(renderNqtStudent)}
                  >
                    Xem
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-icon-text"
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    className="btn btn-success btn-icon-text"
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
        </>
    )
  }
}
