import React from 'react';
import ContentImg from './ImageWb.jsx';
import CommentForm from './CommentForm.jsx';
import './weibo.scss';

export default class OneWb extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isComment:false,
        };
    }

    handlerForwardClick(event){
        if(event.target.innerText=="评论："){
            this.setState({isComment:true});
        }else{
            this.setState({isComment:false});
        }
    }

    render() {
        var oneData=this.props.oneData;
        var commentForm;
        var contentImgs;
        if(this.state.isComment) {
          //控制评论框是否展现,因为是动态的，所以放在state而不是props
          commentForm =<CommentForm data-my-head-img={oneData.headUrl}/>;
        }
     
        if(oneData.contentImgUrls){
          //若后端给的数据中有图片url，则展示
          contentImgs = <ContentImg content-img-urls={oneData.contentImgUrls} />
        }


        return <div className="big-center" >
          <div className="one-wb ">
            <div className="clearfix">
              <div className="ow-left">
                 <img className="nick-img" src={oneData.headUrl}/>

                 <div className="ow-nickrow">
                 
                 <div className="timeandname">
                  <span>{oneData.nickName}</span>
                  <span>{oneData.dateTime}</span>
                  </div>

                  <div className="ow-contentrow">{oneData.content}</div>
                      {contentImgs}
                  </div>

                </div>
              </div>
              
            <div className="ow-footerrow ">
              <ul className="clearfix" onClick={this.handlerForwardClick.bind(this)}>
                <li className="li-side-border"><span>收藏：</span> {oneData.NoCollect}</li><div className="fengexian"></div>
                <li className="li-side-border"><span>转发：</span> {oneData.NoForward}</li><div className="fengexian"></div>
                <li className="li-side-border"><span>评论：</span> {oneData.NoComment}</li><div className="fengexian"></div>
                <li className="li-side-border"><span>赞：</span> {oneData.NoPointGreat}</li>
              </ul>
            </div>
          </div>
          {commentForm}
        </div>;
       }
}