import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import RenderData from './RenderData';
const http = require("https");
var loaded=0;
class App extends Component{
  constructor(props){
    super(props);
    this.state={noun:'',verb:''}
  }
  //Getting data from api
  getdata=()=>{
    document.getElementById('content-heading').style.display='none';
    let word=document.getElementById('word').value;
    if(word==='')
      return;
      this.setState({noun:'*',verb:'*'})
    const fields = "definitions";
    const strictMatch = "false";
    const options = {
      host: 'cors-anywhere.herokuapp.com/od-api.oxforddictionaries.com',
      port: '443',
      path: '/api/v2/entries/en-gb/' + word + '?fields=' + fields + '&strictMatch=' + strictMatch,
      method: "GET",
      headers: {
          'app_id': "79a9e214",
          'app_key': "14b261fc3cff818b5d53a8444511fee9"
      }
    }
  http.get(options, (resp) => {
        let body = '';
        resp.on('data', (d) => {
            body += d;
        });
        resp.on('end', () => {
            if(body){
                let parsed = JSON.parse(body);
                if(!parsed.results)
                this.setState({noun:'#',verb:'#',word:word})    
                else{
                  var output = parsed.results[0].lexicalEntries  // axact address 
                  if(output[0].entries && output[1].entries)
                  this.setState({noun:output[0].entries[0].senses,verb:output[1].entries[0].senses})
                }
            }
        });
    });
    //For front page animation
    if(loaded===0){
        document.getElementById('container').setAttribute('class','container');
        document.getElementById('content').setAttribute('class','content');
        document.getElementById('dictionary-label').classList.toggle('dictionary-label');
        document.getElementById('dictionary-label').classList.toggle('dictionary-label-updated')
        loaded=1;
    }
  }
  render(){
    return (
      <div className="AppBackgorund">
      <img className="App-logo" src={logo} alt="My logo" />      
        <div className="App" id='container'>
          <div className='search-container'>
          <p className='dictionary-label' id='dictionary-label'>Dictionary</p>
          <input type='text' id='word' placeholder='Search Phase or Word'></input>
          <button onClick={this.getdata}><FontAwesomeIcon className='search-icon' icon={faSearch}></FontAwesomeIcon></button>
          </div>
          <div id='content'>
            <div>
              <RenderData data={this.state}/>
            </div>                  
          </div>
        </div>
      </div>
    );
  }
}

export default App;