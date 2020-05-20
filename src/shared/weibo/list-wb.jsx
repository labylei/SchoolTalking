import React from 'react';
import OneWb from './OneWb.jsx';

export default class ListWb extends React.Component{
    render(){
        var OnWbNode=this.props.data.map(function(aWB,index){
            return <OneWb oneData={aWB} key={index} />
            
        })

        return <div>
                {OnWbNode}
             </div>
        
    }
}