import React from 'react';
import Post from './post';

export default class PostList extends React.Component{
    render(){
        var Onedata=this.props.data.map(function(onePost,index){
            return <Post oneData={onePost} key={index}/>
        });

        return(
            <div>
                {Onedata}
            </div>
        )

    }
}