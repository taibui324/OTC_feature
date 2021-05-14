import React from 'react';
import ReactPlayer from "react-player";
import './video.css';


class video extends React.Component{

    constructor(props){
      super(props);
  
      this.state = {
        inputValue : "",
        url:""
      }
    }
  
    handleChange = (event)=>{
      this.setState({inputValue : event.target.value})
    }
  
    handleSubmit = (event) =>{
      event.preventDefault();
      this.setState({url: this.state.inputValue})
    }
  
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <div>
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleChange} style={{margin:"20px"}} className="form-control" type="text" placeholder="Enter your URL" />
                  <button style={{margin:"20px"}} className="btn btn-primary">Insert video</button>
                </form>
              
            </div>
            <ReactPlayer url={this.state.url} controls={true} />
          </header>
        </div>
      );
    }
    
  }

export default video;
