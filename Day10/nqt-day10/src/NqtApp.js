import React from 'react'
import NqtUseState from './components/nqtUseState'
import './App.css';
import NqtUseEffect from './components/NqtUseEffect';

export default function NqtApp() {
  return (
    <div className='container border my-2'>
      <h1 className='text-center'>Demo React Hook</h1>
      <hr />
      <NqtUseState />
      <hr />
      <NqtUseEffect/>
    </div>
  )
}
