import React from 'react'
import  'bootstrap/dist/css/bootstrap.css';
import  '../../css/nav/navright.scss';

export default class Navbar extends React.Component{

    render(){
        return <div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right hidden-sm hidden-xs ">

              <a href="#/HomePage" >
                  <i className="glyphicon glyphicon-home text-muted"></i>
                  <span className="text-center text-muted">首页</span>
               </a>
              
              <a href="#/find" >
                <i className="glyphicon glyphicon-eye-open text-muted"></i>
                <span className="text-center text-muted">发现</span>
              </a>

              <a href="#/person" >
                <i className="glyphicon glyphicon-user text-muted"></i>
                <span className="text-center text-muted">个人中心</span>
              </a>

              <a href="">
                <i className="glyphicon glyphicon-envelope text-muted"></i>
                <span className="text-center text-muted">消息</span>
              </a>

              <a href="#/inputWb" >
                <i className="glyphicon glyphicon-pencil text-muted"></i>
                <span className="text-center text-muted">发帖</span>
              </a>

              </ul>
              </div>
    </div>
    }
}
