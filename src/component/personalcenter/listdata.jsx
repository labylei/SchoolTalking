import React from 'react'


export default class Listdata extends React.Component{

    render(){
        return <div>
                <ul className="list-group">
                <li className="list-group-item"><span className="glyphicon glyphicon-signal"></span>用户数据</li>
                <li className="list-group-item"><span className="glyphicon glyphicon-heart"></span><span className="badge">14</span> 关注用户</li>
                <li className="list-group-item"><span className="glyphicon glyphicon-pencil"></span><span className="badge">14</span> 发表帖子</li>
                <li className="list-group-item"><span className="glyphicon glyphicon-thumbs-up"></span><span className="badge">14</span> 收到点赞</li>
                <li className="list-group-item"><span className="glyphicon glyphicon-file"></span><span className="badge">14</span> 收到评论</li>
                <li className="list-group-item"><span className="glyphicon glyphicon-comment"></span><span className="badge">14</span> 发布话题</li>
                </ul>
         
    
</div>
    }
}


