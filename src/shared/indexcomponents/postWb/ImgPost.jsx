import React from 'react';
import '../../../css/indexcontain/Post/imgPost.scss';


export default class ImgPost extends React.Component{

    render(){
        const Imgdata=this.props.contentimgurls.map(function(Img,index){
            return <li  key={index} className="imgList" ><img src={Img} alt="配图" className="img" /></li>;
        })

        return(
            <div className="weiboImage">
                <ul className="imgback">
                    {Imgdata}
                </ul>
            </div>
            
        )
    }
}