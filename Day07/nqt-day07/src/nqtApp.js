import './App.css';
import NqtRenderCondition from './components/NqtRenderCondition';
import NqtRenderList from './components/NqtRenderList';
import NqtRenderListStudent from './components/NqtRenderListStudent';
// import NqtRenderCondition from 'components/nqtRenderCondition';

function nqtApp() {
  return (
    <div className="App">

      <NqtRenderCondition/>
      <hr />
      <div className='alert alert-info'>
        <NqtRenderList/>
      </div>
      <hr />
      <NqtRenderListStudent/>
    </div>
  );
}

export default nqtApp;
