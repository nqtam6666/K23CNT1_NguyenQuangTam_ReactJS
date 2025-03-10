
import './App.css';
import NqtBai1 from './components/NqtBai1';
import NqtBai2 from './components/NqtBai2';
import NqtBai3 from './components/NqtBai3';
import NqtBai4 from './components/NqtBai4';
import NqtBai5 from './components/NqtBai5';
import NqtBai6 from './components/NqtBai6';
import TvcThemeProvider, { TvcThemedComponent } from './components/NqtBai7';

function NqtApp() {
  return (
    <div className='container border mt-3'>
      <h1>bài tập</h1>
      <NqtBai1/>
      <hr />
      <NqtBai2 />
      <hr />
      <NqtBai3 />
      <hr />
      <NqtBai4 />
      <hr />
      <NqtBai5 />
      <hr />
      <NqtBai6 />
      <hr />
      <TvcThemeProvider>
      <TvcThemedComponent />
    </TvcThemeProvider>
    </div>
  );
}

export default NqtApp;
