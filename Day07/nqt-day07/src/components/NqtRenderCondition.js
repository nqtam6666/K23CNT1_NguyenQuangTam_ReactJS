import React, { Component } from 'react';
import NqtLoginControl from './NqtLoginControl';

class NqtRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    nqtHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    nqtHandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <NqtLoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ?
                        <button className='btn btn-danger' onClick={this.nqtHandleLogout} >Logout</button>
                        : <button className='btn btn-primary' onClick={this.nqtHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NqtRenderCondition;