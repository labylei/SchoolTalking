import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Hotissue from './hotissue'
import Hottag from './hottag'
import Mayknow from './mayknow'
import PostList from './postWb/postlist'
import '../../css/indexcontain/indexcontain.scss'

export default class Indexcontain extends React.Component{

    render(){
        var dataList=[{
            headUrl:'http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg',
            nickName:'Robin',
            dateTime:'5月13号',
            content:'啦啦啦啦啦啦啦啦啦啦啦，什么作业都没做',
            NoCollect:132,
            NoForward:202,
            NoComment:142,
            NoPointGreat:423,
            contentImgUrls:[
                'http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg',
                'http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg',
                'http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg',
                'http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg'
            ]
        },
        {
            headUrl:'http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg',//头像
            nickName:'Lei',//昵称
            dateTime:'5月14号',//日期
            content:'拿快递拿快递3号小邮局爆仓啦',//文本
            NoCollect:132,//收藏
            NoComment:142,//评论
            NoPointGreat:423,//点赞
            contentImgUrls:[//文本里的图片
                'http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg',
                'http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg'
            ]
        }
    ]


        return <div className="forul">
            {/*主页中除了导航 除了页脚的部分 包括左边的热门分类 中间的好友动态 右边的热门话题 右边的你可能认识*/}
        <div className="container">
        <div className="row">

            {/*热门分类*/}
            <div className="col-sm-2  blog-sidebar ">
                <div className="panel panel-default ">
                    <div className="panel-heading">
                        <h3 className="panel-title">热门分类</h3>
                    </div>
                    <div className="panel-body">
                    {/*hottag*/}
                    <Hottag></Hottag>
                    </div>
                </div>
            </div>
            {/*热门分类*/}


            {/*动态区*/}
            <div className="col-sm-7 blog-main ">
                <div role="tabpanel" className="tab-pane" >
                    <div>
                        {/*动态导航栏*/}
                        <div className="forul">
                            <ul className="nav nav-tabs" role="tablist" >
                            <li role="presentation" className="active"><a href="#friends-dynamic" aria-controls="friends-dynamic" role="tab" data-toggle="tab" >好友动态</a></li>
                            <li role="presentation" ><a href="#friend-dynamic-fowarded" aria-controls="friend-dynamic-fowarded" role="tab" data-toggle="tab">转发</a></li>
                            <li role="presentation" ><a href="#friend-dynamic-like" aria-controls="friend-dynamic-like" role="tab" data-toggle="tab">点赞</a></li>
                           
                            <li role="presentation" ><a href="#my-dynamic" aria-controls="my-dynamic" role="tab" data-toggle="tab">个人动态</a></li>
                            <li role="presentation" ><a href="#my-dynamic-fowarded" aria-controls="my-dynamic-fowarded" role="tab" data-toggle="tab">转发</a></li>
                            <li role="presentation" ><a href="#my-dynamic-like" aria-controls="my-dynamic" role="tab" data-toggle="tab">点赞</a></li>
                            </ul>
                            {/*动态导航栏*/}
                    </div>
                        {/*Tab panes*/}
                        <div className="tab-content">
                            
                                <div role="tabpanel" className="tab-pane active" id="friends-dynamic">
                                    <PostList data={dataList} />
                                </div>


                                <div role="tabpanel" className="tab-pane" id="friend-dynamic-fowarded">
                                    <PostList data={dataList} />
                                </div>
                                <div role="tabpanel" className="tab-pane" id="friend-dynamic-like">
                                    <PostList data={dataList} />
                                </div>
                                <div role="tabpanel" className="tab-pane" id="my-dynamic">
                                    <PostList data={dataList} />
                                </div>
                                <div role="tabpanel" className="tab-pane" id="my-dynamic-fowarded">
                                    <PostList data={dataList} />
                                </div>
                                <div role="tabpanel" className="tab-pane" id="my-dynamic--like">
                                    <PostList data={dataList} />
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/*动态区*/}

            {/*热门话题*/}
            <div className="col-sm-3 blog-sidebar  ">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">热门话题</h3>
                    </div>
                    <div className="panel-body">
                        {/*hotissue*/}
                        <Hotissue></Hotissue>
                    </div>
                </div>
           
            
            {/*热门话题*/}

                {/*你可能认识*/}
                <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">你可能认识
                                
                                <button className="btn btn-xs">
                                    <span className="glyphicon glyphicon-refresh"></span>
                                </button>
                               
                            </h3>
                        </div>
                    <div className="panel-body">
                    {/*maykonw*/}
                    <Mayknow></Mayknow>
                    
                    </div>
                </div>
                {/*你可能认识*/}
            </div>
        </div>
        </div>
    </div>
    }
}


