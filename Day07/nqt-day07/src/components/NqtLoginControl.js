import React from 'react'
import nqtLoginCom from './NqtLoginCom'
import nqtLogoutCom from './NqtLogoutCom'

export default function TvcLoginControl(props) {
    const nqtElement = props.isLoggedIn ? <nqtLoginCom /> : <nqtLogoutCom />

    const nqtLogin = ()=>{
        if(props.isLoggedIn)
            return <nqtLogoutCom />
        else
            return <nqtLoginCom />
    }

  return (
    <div>
      {nqtLogin}
      {nqtElement}
    </div>
  )
}