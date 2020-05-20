import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  '../../css/indexcontain/commentcontain.scss'
export default class hottag extends React.Component{


    render(){
        return <div>
      {/*评论列表*/}
      <div className="forpanel">
            {/*评论内容*/}
            <div className="media">
                <div className="media-left">
                    <a href="#">              {/*头像*/}
                        <img className="media-object img-rounded" src='/src/img/avatar.jpg' alt="..." ></img>
                        
                    </a>
                </div>
                <div className="media-body">     {/*昵称*/}
                    <h5 className="media-heading">我是小美</h5>
                    <h6>2020/5/17/15:39</h6>   {/*发表时间*/}
                    {/*内容 文字*/}
                    <h6>虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 
                        - Less 和 Sass 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。你的网站和
                        应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。
                    </h6>
                    
                </div>
            </div>
                {/*评论内容*/}
        </div>
    </div>
    }
}
