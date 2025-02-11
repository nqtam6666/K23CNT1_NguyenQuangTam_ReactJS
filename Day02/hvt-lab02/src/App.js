import logo from './logo.svg';
import loading from './logo2.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading} className="App-logo" alt="logo2" />
        <h1 className="App-title">Infomation</h1>
        <p>Họ và tên: Nguyễn Quang Tâm</p>
        <p>Mã sinh viên:  2310900093</p>
        <p>Ngày sinh: 26/06/2005</p>
        <p>Điện thoại: 096113844*</p>
        <p>Tên lớp: K23CNT1</p>
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
        >
          Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
