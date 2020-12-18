import React from "react";
import imgsrc from "./s&s.jpg";
class App extends React.Component {
  state={
    fullname:"samar",
    bio:" alkamel",
    imgsrc:imgsrc,
    profession:"engineer",
    show :false,
    count:0,
}
componentDidMount(){this.setState({count:0})
setInterval(()=>this.setState({count:this.state.count+1}),1000)}

  render(){
    return (
    <div className="App">
     <h1>hello mr haroun</h1>
     <h3>{this.state.count}</h3>
     <button onClick={()=>this.setState({show:!this.state.show})}>show</button>
     {this.state.show===true?
     <div> 
       <img src={this.state.imgsrc} alt=" "/>
     <h2>{this.state.fullname}</h2>
     <h4>{this.state.bio}</h4>
     <h5>{this.state.profession}</h5>
     </div>
     :<div></div>
     }
    </div>
  );
  }
}
export default App;
