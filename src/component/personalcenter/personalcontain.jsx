import React from 'react'

import '../../css/personalcenter.scss'
import Personalinfor from '@/components/personalcenter/personalinfor'
import Post from '@/components/indexcomponents/post'
import Avatar from '@/components/personalcenter/avatar'
import Accountinfor from '@/components/personalcenter/accountinfor'
import Listdata from '@/components/personalcenter/listdata'
import Inforshow from '@/components/personalcenter/inforshow'
import Follow  from '@/components/personalcenter/follow'

//import jqjs from  '_jquery@3.5.1@jquery/dist/jquery.js'
//import bootjs from 'bootstrap/dist/js/bootstrap.js'

export default  class Personalcontain extends React.Component{
    render(){
        return <div>
            <div  className="container">
                    <div  className="row">
                        <div  className="col-md-12 ">
                            {/*个人信息*/}
                           <Inforshow></Inforshow>
                           
                        </div>
                    </div>



                    <div  className="row">
                        <div  className="col-md-3 ">

                            <div className="forlist">
                                <Listdata></Listdata>
                            </div>
                        </div>
                        <div  className="col-md-8 ">
                           
                           <div className="fornav">
                            <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active"><a href="#personal-infor" aria-controls="personal-infor" role="tab" data-toggle="tab">个人信息</a></li>
                                    <li role="presentation"><a href="#account-infor" aria-controls="account-infor" role="tab" data-toggle="tab">账户信息</a></li>
                                    <li role="presentation"><a href="#follow" aria-controls="follow" role="tab" data-toggle="tab">关注用户</a></li>
                                    <li role="presentation"><a href="#all-post" aria-controls="all-post" role="tab" data-toggle="tab">帖子</a></li>
                                    <li role="presentation"><a href="#collection" aria-controls="collection" role="tab" data-toggle="tab">个人收藏</a></li>
                                    <li role="presentation"><a href="#avatar" aria-controls="avatar" role="tab" data-toggle="tab">头像更换</a></li>
                                </ul>
                             </div>    
                             {/*个人信息面板*/}
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="personal-infor">
                            <Personalinfor></Personalinfor>
                            </div>

                            {/*个人账户面板*/}
                                <div role="tabpanel" className="tab-pane" id="account-infor">
                                <Accountinfor></Accountinfor>
                                </div>

                            {/*关注用户面板面板*/}
                            <div role="tabpanel" className="tab-pane" id="follow">
                                <Follow></Follow>
                                <Follow></Follow>
                                </div>
                            {/*所有帖子面板*/}
                                <div role="tabpanel" className="tab-pane" id="all-post">
                                    <Post></Post>
                                </div>
                            {/*个人收藏面板*/}   
                                <div role="tabpanel" className="tab-pane" id="collection">
                                    <Post></Post>
                                </div>
                            {/*修改头像面板*/}    
                                <div role="tabpanel" className="tab-pane" id="avatar">
                                    <Avatar></Avatar>
                                </div>
                      </div> 
                      </div>    
            </div>   
</div>
</div>
 
    }
}

