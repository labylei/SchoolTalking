import React from 'react';
import  'bootstrap/dist/css/bootstrap.css';
import  '../../css/indexcontain/mayknow.scss';


export default class hottag extends React.Component{

    render(){
        return <div>
      {/*你可能认识框*/}
      <div className="formedial">
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="media">
                        <div className="media-left">
                            {/*用户头像*/}
                            <a href="#">
                            <img className="media-object img-rounded" src='/src/img/avatar.jpg' alt="..."/>
                            </a>
                             {/*用户头像*/}
                        </div>
                        <div className="media-body">
             {/*用户昵称*/}     <h5 className="media-heading">我是小美</h5>  {/*用户昵称*/}
             {/*用户简介*/}      <h6 className="media-intoduction">我是计算机学院数媒专业的小美</h6>{/*用户简介*/}
                        </div>
                    </div>
                 </li>
            
                 <li className="list-group-item">
                    <div className="media">
                        <div className="media-left">
                            {/*用户头像*/}
                            <a href="#">
                            <img className="media-object img-rounded" src='/src/img/avatar.jpg' alt="..."/>
                            </a>
                             {/*用户头像*/}
                        </div>
                        <div className="media-body">
             {/*用户昵称*/}     <h5 className="media-heading">我是小美</h5>  {/*用户昵称*/}
             {/*用户简介*/}      <h6 className="media-intoduction">我是计算机学院数媒专业的小美</h6>{/*用户简介*/}
                        </div>
                    </div>
                 </li>
            </ul>
        </div>
        {/*你可能认识框*/}
    </div>
    }
}
