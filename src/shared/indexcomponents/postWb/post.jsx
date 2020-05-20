import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/indexcontain/Post/post.scss';
import Commentlist from '../commentlist';
import ImgPost from './ImgPost';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            isComment:false,
        };
    }

    render(){
        const oneData=this.props.oneData;
        let contentImgs;
        let comments;

        if(this.state.isComment){
            comments=<Commentlist />;
        }

        if(oneData.contentImgUrls){
            contentImgs=<ImgPost contentimgurls={oneData.contentImgUrls}/>;
        }

        return <div>
      {/*一个帖子框*/}
      <div className="forpanel">
        <div className="panel panel-default">
                <div className="panel-body">
                    {/*帖子内容*/}
                    <div className="media">
                        <div className="media-left">
                            <a href="#">              {/*头像*/}
                                <img className="media-object img-rounded" src={oneData.headUrl} alt="..." ></img>
                               
                            </a>
                        </div>
                        <div className="media-body">     {/*昵称*/}
                            <h4 className="media-heading">{oneData.nickName}</h4>
                            <h6>2020/5/17/15:39</h6>   {/*发表时间*/}
                            {/*内容 文字*/}
                            <p>{oneData.content}</p>
                            {/*图片  图片情况要视数量而定 就由你来弄啦*/}
                            {contentImgs}
                        </div>
                     </div>
                     {/*帖子内容*/}

                      {/*收藏转发评论点赞*/}
                      
                        <div className="btn-group btn-group-justified" role="group" aria-label="...">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>收藏</button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-share-alt"aria-hidden="true"></span>转发</button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-pencil"aria-hidden="true"></span>评论</button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-thumbs-up"aria-hidden="true"></span>点赞</button>
                            </div>
                        </div>
                     {/*收藏转发评论点赞*/}


                     {/*伪评论 只是样式*/}
                     {comments}
                     {/*伪评论 只是样式*/}
                </div>
        </div>
      </div>
    {/*帖子框*/}
    </div>
    }
}
