import './App.css';
import NqtButton from './components/NqtButton';
import ExuseEffect from './components/ExuseEffect';
import NqtUseState from './components/a/NqtUseState';
import NqtUseStateListObject from './components/NqtUseStateListObject';
import NqtUseEffect1 from './components/NqtUseEffect1';
function NqtApp() {
  
  return (
    <div style={{textAlign: 'center', padding: '20px'}} className='container border mt-3'>
      <h1>Nguyễn Quang Tâm - Day 09 - React Hook</h1>
      <NqtButton/>
      <hr />
      <ExuseEffect/>
    <hr />  
      <NqtUseState/>  
    <hr />
      <NqtUseStateListObject/>
    <hr />
      <NqtUseEffect1/>
    </div>
  );
}

export default NqtApp;