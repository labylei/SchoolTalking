import React from 'react'
import ReactDom from 'react-dom'


import '@/css/personalcenter/personalcenter.scss'
import Post from '@/components/indexcomponents/post'
import Listdata from '@/components/personalcenter/listdata'
import Inforshow from '@/components/personalcenter/inforshow'
import Follow  from '@/components/personalcenter/follow'


export default  class Yourpage extends React.Component{

    render(){
        return <div>
            <div  className="container">
                    <div  className="row">
                        <div  className="col-md-12 ">
                            {/*个人信息*/}
                           <Inforshow></Inforshow>

                            <div  className="forfollow">
                                <button className="btn btn-primary btn-lg">关注</button>
                            </div>
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
                                    <li role="presentation" className="active"><a href="#follow" aria-controls="follow" role="tab" data-toggle="tab">关注用户</a></li>
                                    <li role="presentation"><a href="#all-post" aria-controls="all-post" role="tab" data-toggle="tab">帖子</a></li>
                                </ul>
                             </div>    
                             {/*个人信息面板*/}
                        <div className="tab-content">
                            {/*关注用户面板面板*/}
                            <div role="tabpanel" className="tab-pane active" id="follow">
                                <Follow></Follow>
                                <Follow></Follow>
                                </div>
                            {/*所有帖子面板*/}
                                <div role="tabpanel" className="tab-pane" id="all-post">
                                    <Post></Post>
                                </div>
                            
                      </div> 
                      </div>    
            </div>   
</div>
</div>
 
    }
}

