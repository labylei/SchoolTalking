import React from 'react';
import '../../css/indexcontain/commentlist.scss';
import Commentcontain from './commentcontain';
export default class hottag extends React.Component{

    render(){
    return <div>
      {/*评论列表*/}
      <div className="pinglun">
        <div className="panel panel-default">
                <div className="panel-body">

                    {/*评论文本输入框*/}
                    <div className="media">
                        <div className="media-left">
                            <a href="#">              {/*头像*/}
                                <img className="media-object img-rounded" src='/src/img/avatar.jpg' alt="..." ></img>
                            </a>
                        </div>
                        <div className="media-body">     {/*昵称*/}
                        <input type="text" className="form-control" placeholder="Text input"></input>
                        <button className="btn btn-warning btn-xs">评论</button>
                        </div>
                     </div>
                     {/*评论文本输入框*/}

                    {/*评论内容*/}
                    <Commentcontain></Commentcontain>
                     {/*评论内容*/}
                </div>
        </div>
      </div>
    {/*帖子框*/}
    </div>
    }
}
