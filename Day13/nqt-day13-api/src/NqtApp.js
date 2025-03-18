import './App.css';
import NqtCreateMockAPI from './components/NqtCreateMockAPI';
import NqtLocalAPI from './components/NqtLocalAPI';
import NqtReadMockAPI from './components/NqtReadMockAPI';

function Nqt() {
  return (
    <div className="container text-center">
      <h1 className='alert alert-info'>Day 13 - React - API</h1>
      <hr />
      <NqtLocalAPI />
      <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <NqtReadMockAPI />

        <NqtCreateMockAPI />
    </div>
  );
}

export default Nqt;
