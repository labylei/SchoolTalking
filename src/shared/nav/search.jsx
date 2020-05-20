import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import  '../../css/nav/search.scss'; 
export default class Nav extends React.Component{
    render(){
        return <div>
    {/*搜索框*/}
        <div className="search">
              <div className="col-lg-4 nav-search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="搜索用户、帖子..."></input>
                  <span className="input-group-btn">
                    <button className="btn btn-default btn-warning" type="button">搜索</button>
                  </span>
                </div>
              </div>
        </div> 
    {/*搜索框*/}
    </div>
    }
}
