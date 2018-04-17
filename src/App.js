import React, { Component } from 'react';
import Header from './components/common/Header';
import FormClaim from './components/form/FormClaim';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormClaim />
        {/*<p className="App-intro">*/}
            {/*Hello World !*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
