import React from 'react'
import '../../css/personalcenter.scss'

export default class Inforshow extends React.Component{

    render(){
        return <div>
                            <div  className="forbackground">
                                <img src={'/src/img/background.jpg'}/>
                            </div>
                            <div  className="foravatar">
                                <img src={'/src/img/avatar.jpg'}  className="img-thumbnail"/>
                            </div>
                            <div  className="forname">
                                <h2>我是小美</h2>
                            </div>
                            <div  className="forintru">
                                <h3>我是计算机学院数媒专业的小美</h3>
                            </div>
            
</div>
    }
}


