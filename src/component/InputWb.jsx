import React from 'react';
import '../css/writecontain.scss';

export default class Write extends React.Component{

    render(){
        return <div>
       
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title text-warning"><span className="glyphicon glyphicon-pencil">快来分享吧~</span></h3>
                    </div>
                    <div className="panel-body">
                        
                            <textarea className="form-control" rows="16" maxLength="500"></textarea>

                            <div className="for">

                                {/*图片按钮*/}
                                <button type="button" className="btn" >
                                    <span className="glyphicon glyphicon-picture"></span>
                                </button>
                                {/*图片按钮*/}
                                <button className="btn " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <span className="glyphicon glyphicon-tag"></span>
                                </button>
 
                                {/*图片按钮*/}
                                <button className="btn " type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                    <span className="glyphicon glyphicon-comment"></span>
                                </button>
                            </div>    
                                {/*tag展开面板*/}
                            
                                <div className="collapse" id="collapseExample">
                                    <div className="well">
                                        <span className="label label-primary">世界</span>
                                        <span className="label label-success">学习</span>
                                        <span className="label label-info">比赛</span>
                                        <span className="label label-warning">生活</span>
                                        <span className="label label-danger">社团</span>
                                        <span className="label label-primary">活动</span>
                                        <span className="label label-success">音乐</span>
                                        <span className="label label-info">寻物找人</span>
                                        <span className="label label-warning">通知</span>
                                        <span className="label label-danger">身边事</span>
                                    </div>
                                </div>
                            
                                {/*话题展开面板*/}    
                                <div className="collapse" id="collapseExample1">
                                    <div className="well">
                                        <input type="text" placeholder="发布话题tips: #话题标题#"></input>
                                    </div>
                                </div>                   
                            
                            <button type="button" className="btn btn-warning btn-sm"><span className="glyphicon glyphicon-ok">发布</span></button>
                            </div>
                    <div className="panel-footer">  </div>
                   
                 </div>
             </div>
        
        </div>
    </div>
    }
}


