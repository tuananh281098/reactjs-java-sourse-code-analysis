import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
class Logout extends Component{
    render(){
        console.log('log out');
        localStorage.removeItem('user');
        return(

            <Redirect to='/login' />
        )
    }
}

export default Logout;