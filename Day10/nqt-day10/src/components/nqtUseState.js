import React, { useState } from 'react';

export default function NqtUseState() {
  // Initialize state for counter
  const [nqtCount, setNqtCount] = useState(0);
  
  // Initialize state for array
  const nqtArr = [1, 3, 33, 3];
  const [nqtArray, setNqtArray] = useState(nqtArr);
  
  // Initialize state for student list
  const nqtStudents = [
    { nqtID: "S001", nqtName: "Nguyễn Quang Tâm", nqtAge: 20 },
    { nqtID: "S002", nqtName: "Nguyễn Quang A", nqtAge: 20 },
    { nqtID: "S003", nqtName: "Nguyễn Quang B", nqtAge: 20 },
  ];
  const [nqtStudentList, setNqtStudentList] = useState(nqtStudents);

  // Function to add new element to array
  const handleAddElement = () => {
    setNqtArray([...nqtArray, Math.floor(Math.random() * 100)]);
  };
  const nqtHandleAddNewStudent = () => {
    const newStudent = {
      nqtID: `S${(nqtStudentList.length + 1).toString().padStart(3, '0')}`, // Creates S004, S005, etc.
      nqtName: `Nguyễn Quang New${nqtStudentList.length + 1}`, // Simple name generator
      nqtAge: 20 // Default age
    };
    
    // Add new student to the existing list using spread operator
    setNqtStudentList([...nqtStudentList, newStudent]);
  };

  return (
    <div className='alert alert-danger'>
      <h2>Use State Demo</h2>
      
      {/* Counter Section */}
      <div>
        <h3>Count: {nqtCount}</h3>
        <button onClick={() => setNqtCount(nqtCount + 1)}>Tăng</button>
        <button onClick={() => setNqtCount(nqtCount - 1)}>Giảm</button>
      </div>
      
      {/* Array Section */}
      <div>
        <h3>Array: {nqtArray.toString()}</h3>
        <button onClick={handleAddElement}>Thêm phần tử</button>
      </div>
      
      {/* Student List Section */}
      <div>
        <h3>Danh sách sinh viên</h3>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {nqtStudentList.map((nqtStudent, index) => (
              <tr key={index}>
                <td>{nqtStudent.nqtID}</td>
                <td>{nqtStudent.nqtName}</td>
                <td>{nqtStudent.nqtAge}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <button onClick={nqtHandleAddNewStudent}>Thêm mới sinh viên</button>
          </tfoot>
        </table>
      </div>
    </div>
  );
}