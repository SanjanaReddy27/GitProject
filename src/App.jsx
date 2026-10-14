import React, {Component} from 'react';
class App extends Component
{
   constructor()
   {
     super();
     this.state={count:0};
   }
   componentDidMount()
   {
    console.log("Component Mounted");
   }
   componentDidUpdate()
   {
    console.log("Component Updated");
   }
   render()
   {
    return(
      <div>
        <h1>React LifeCycle</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increase</button>
        </div>
    );
   }
   }
   export default App;