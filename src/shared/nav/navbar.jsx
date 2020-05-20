import React from 'react';
import Navright from '../nav/navright.jsx';
import Search from '../nav/search.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import  '../../css/nav/navbar.scss';
import { Button } from 'reactstrap';



export default class Nav extends React.Component{

    render(){
        return <div className="navbar">
      {/*头部导航条*/}
       
        <nav className="navbar navbar-default  navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </Button>
            </div>
            
            <div className="collapse navbar-collapse nav-all" id="bs-example-navbar-collapse-1">
            {/*搜索框*/}
            <Search/>
            {/*导航右边*/}
            <Navright/>

            </div>
          </div>
        </nav>
    </div>
    }
}
