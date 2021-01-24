import React,{Component} from 'react';
import './RenderData.css';
class RenderData extends Component{
    renderData=(data, id)=>{
        let index=1;
        let index2=1;
        console.log(11,data)
        if(data!=='')
        return(
            <div id={id}>
                <ol>
            {
                data.map((description)=>{
                    {index++}
                    {index2=1}
                    if(!description.subsenses)
                    return(
                        <li key={description.id}>
                            {description.definitions}
                        </li>           
                    )
                    else
                    return(
                        <li key={description.id}>
                            {description.definitions}
                                {description.subsenses.map((defination)=>{
                                    {index2++}
                                return <span className='helping-text'>{index-1}.{index2-1} {defination.definitions[0]}</span>
                                })}
                            
                        </li>    
                    )                        
                })
            }
            </ol>
            </div>    
        ) 
    }
    render(){
    return(
        <div className='conten-data'>
            <div>
            <p id='noun'>Noun</p>
            <p id='verb'>Verb</p>
            </div>
            <div>
                {this.renderData(this.props.data.noun, 'noun2')}
                {this.renderData(this.props.data.verb, 'verb2')}
            </div>
        </div>
    )
}
}
export default RenderData;