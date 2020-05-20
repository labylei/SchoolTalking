import React from 'react'
import '../../css/indexcontain/hotissue.scss'
export default class hottag extends React.Component{

    render(){
        return <div>
      {/*热门话题框*/}
      <div className="remen">
            <div className="list-group">
                <a href="#" className="list-group-item">#今天天气很好# <span className="badge">42</span></a>
                <a href="#" className="list-group-item">#今天天气很好# <span className="badge">142</span></a>
                <a href="#" className="list-group-item">#今天天气很好# <span className="badge">242</span></a>
                <a href="#" className="list-group-item">#今天天气很好# <span className="badge">342</span></a>
                <a href="#" className="list-group-item">#今天天气很好# <span className="badge">442</span></a>
            </div>
     </div>
    {/*热门话题框*/}
    </div>
    }
}
