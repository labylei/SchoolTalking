import React from 'react';

//取得当前时间
function getCurrentFormatDate(){
    var date=new Date();
    var seperator1="-";
    var seperator2=":";
    var month=date.getMonth()+1;
    var strDate=date.getDate();
    if(month>=1&&month<=9){
        month="0"+month;
    }
    if(strDate>=0&&strDate<=9)
    {
        strDate="0"+strDate;
    }
    var currentdate=date.getFullYear()+seperator1+month+seperator1+strDate
        +" "+date.getHours()+seperator2+date.getMinutes()
        +seperator2+date.getSeconds();
    return currentdate;
}


export default class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //默认评论区为空
            replycontents:[
                {
                    name:"daa",
                    content:"很棒"
                }
            ],
        }
    }
    render(){
        var imgUrl=this.props['data-my-head-img'];
        //遍历评论内容
        var replycontents=this.state.replycontents.map(function(data,index){
            return(
                <div key={index}>
                    <div>
                        {/*回复名字*/}
                        <span className="contentname">{data.name}</span>
                        <span>{data.content}</span>
                    </div>
                    <div>
                        <span>{data.time}</span>
                    </div>
                </div>
            );
        });
        return(
            <div className="big-center">

                <img src={imgUrl} alt="头像" className="little-head"></img>
              
                <div className="textarea">
                    <textarea  rows="4" cols="4" ref="content" />
                    <button className="commentStyle" onClick={this._reply.bind(this)}>评论</button>
                
                </div>
                {replycontents}
            </div>
        )
    }

    _reply(){
        let currentTime=getCurrentFormatDate();
    
        //取得回复的内容
        let recontent=this.refs.content.value;
        if(recontent.length==0)
        {
            alert('评论内容不能为空')
            return;
        }
        const usename=this.props['nickName'];
        let newContent={
            content:recontent,
            //name:{this.props['nickName']},
            name:"lei",
            time:currentTime,
        }
    
        let oldRepContent=this.state.replycontents,
    
        newRplContent=oldRepContent.concat(newContent);
    
        this.setState({
            replycontents:newRplContent,
        });
    
        this.refs.content.value="";
    }
}