import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

var loaded=0;
class App extends Component{
  data=()=>{
/*    let word=document.getElementById('g').value;
    let r=new Request('https://od-api.oxforddictionaries.com/api/v2/entries/en/'+word)
    fetch(r)
    .then((respose)=>{
      console.log(respose);
    })*/
  document.getElementById('container').setAttribute('class','container');
  if(loaded==0){
    document.getElementById('container').innerHTML+="<div class='content'></div>";
    loaded=1;
  }
  }
  
  render(){
  return (
    <div className="AppBackgorund">
      
      <div className="App" id='container'>
      <div className='search-container'>
      <p className='dictionary-label'>Dictionary</p>
      <input type='text' placeholder='Search Phase or Word'></input>
      <button onClick={this.data}><FontAwesomeIcon className='search-icon' icon={faSearch}></FontAwesomeIcon></button>
      </div>

    </div>

    </div>
  );
}
}

export default App;
