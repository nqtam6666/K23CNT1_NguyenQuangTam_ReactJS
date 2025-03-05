import React, { Component } from "react";
import NqtControl from "./components/NqtControl";
import NqtStudenList from "./components/NqtStudenList";
import NqtFormStudent from "./components/NqtFormStudent";

export default class NqtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nqtStudents:[
        {nqtID: 'S001', nqtName: 'Nguyễn Quang Tâm', nqtAge: '20', nqtGender: 'Nam', nqtBirthday: '26/06/2005', nqtBirthPlace: 'HN', nqtAdress: 'Thanh Trì, Hà Nội, Việt Nam'},
        {nqtID: 'S002', nqtName: 'Nguyễn Quang A', nqtAge: '20', nqtGender: 'Nam', nqtBirthday: '26/06/2005', nqtBirthPlace: 'DN', nqtAdress: 'Thanh Trì, Hà Nội, Việt Nam'},
        {nqtID: 'S003', nqtName: 'Nguyễn Quang B', nqtAge: '20', nqtGender: 'Nữ', nqtBirthday: '26/06/2005', nqtBirthPlace: 'HN', nqtAdress: 'Thanh Trì, Hà Nội, Việt Nam'},
        {nqtID: 'S004', nqtName: 'Nguyễn Quang C', nqtAge: '20', nqtGender: 'Nam', nqtBirthday: '26/06/2005', nqtBirthPlace: 'HN', nqtAdress: 'Thanh Trì, Hà Nội, Việt Nam'},
      ],
      nqtStudent: "",

    }
  }
  //Hàm xử lý sự kiện xem sv
  NqtHandleView = (nqtStudent)=>{
    this.setState({
      nqtStudent: nqtStudent,
    })
  }
  render() {
    console.log('View Student: ', this.state.nqtStudent);
    
    return (
      <div>
        <h1>Nguyễn Quang Tâm - Day08</h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* <header></header> */}
                <NqtControl />
                {/* body */}
                <NqtStudenList renderNqtStudents = {this.state.nqtStudents} onNqtHandleView = {this.NqtHandleView}/>
              </div>
            </div>
            <div className="col-5 grid-margin">
              <div className="card">
                {/* form-sv */}
                <NqtFormStudent renderNqtStudent = {this.state.nqtStudent}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
