import React from 'react'


export default class Personalinfor extends React.Component{

    render(){
        return <div>
 
                    
                <div className="panel panel-default">
                <div className="panel-body">
                <table className="table table-bordered  table-striped ">
                            <tbody>
                              <tr>
                               
                                  <th>昵称</th>
                                  <td>小美</td>
                               </tr>
                               <tr>
                                  <th>简介</th>
                                  <td>我是计算机学院数媒专业的小美</td>
                                  </tr>
                                  <tr>
                                  <th>姓名</th>
                                  <td>陈小美</td>
                                  </tr>
                                <tr>
                                  <th>部门</th>
                                  <td>计算机学院</td>
                                </tr>
                                <tr>
                                  <th>职位</th>
                                  <td>学生</td>
                                </tr>
                                <tr>
                                  <th>工号</th>
                                  <td>2017031701099</td>
                                </tr>
                        
                            </tbody>
                          </table>
                </div>
                
                </div>
                <button className="btn btn-warning"><a href="edit-personal.html">修改信息</a></button>
                     
                     
                   

    
</div>
    }
}


