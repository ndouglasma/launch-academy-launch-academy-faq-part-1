import React from "react";
import FAQ from "./FAQ"

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return(
      <div> <FAQ data={this.props.data}/> </div>
    )
  }
}

export default App;
