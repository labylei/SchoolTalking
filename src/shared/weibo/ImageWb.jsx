import React from 'react';

export default class ContentImg extends React.Component{

  render() {
    var imgNodes=this.props['content-img-urls'].map(function(oneImg,index){
      return <li  key={index} className="imgList" ><img src={oneImg} alt="微博配图" className="img" /></li>;
    });
    return <div  className="weiboImage">
      <ul>
        {imgNodes}
      </ul>
    </div>
  }
}