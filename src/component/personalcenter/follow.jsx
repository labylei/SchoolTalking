import React from 'react'
import '../../css/personalcenter.scss'


export default class Accountcontain extends React.Component{

    render(){
        return <div>
 
            <div className ="follweavatar">
                <div className="panel panel-default">
                <div className="panel-body">
               
                <ul className="media-list">
                    <li className="media">
                        <div className="media-left">
                        <a href="#">
                            <img className="media-object img-circle" src={'/src/img/avatar.jpg'} alt="..."/>
                        </a>
                        </div>
                        <div className="media-body">
                        <h4 className="media-heading">关注用户的名称</h4>
                        <h5>关注用户的简介</h5>
                        </div>
                    </li>
                    </ul>
                    
                
                </div>
                </div>
                </div>
    
</div>
    }
}


