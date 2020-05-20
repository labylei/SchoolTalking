import React from 'react'
import '../../css/indexcontain/hottag.scss'
export default class hottag extends React.Component{

    render(){
        return <div>
      {/*热门分类框*/}
      <div className="forlabel">
          <a href=""><span className="label label-primary">世界</span></a>
          <a href=""><span className="label label-success">学习</span></a>
          <a href=""><span className="label label-info">比赛</span></a>
          <a href=""><span className="label label-warning">生活</span></a>
          <a href=""><span className="label label-danger">社团</span></a>
          <a href=""><span className="label label-primary">活动</span></a>
          <a href=""><span className="label label-success">音乐</span></a>
          <a href=""><span className="label label-info">寻物找人</span></a>
          <a href=""><span className="label label-warning">通知</span></a>
          <a href=""><span className="label label-danger">身边事</span></a>
          </div>
    {/*热门分类框*/}
    </div>
    }
}
