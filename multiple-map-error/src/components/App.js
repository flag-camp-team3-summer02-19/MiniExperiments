import React from 'react';
import { Button, Radio, Icon } from 'antd';
import ShowMapError from '../components/ShowMapError';
import ShowMapFix from '../components/ShowMapFix';

class App extends React.Component {
  state = {
    showError: false
  }

  triggerError = () => {
      this.setState(prev => ({
          showError: !prev.showError
      }));
  }

  render() {
    return (
      <div className="App">
        <p>
          Here we would like to simulate error first
          <br/> click the button below to see error in console log
        </p>
        <Button onClick={this.triggerError}>Show Me Error</Button>
          {
              this.showError ? <ShowMapError /> : <ShowMapFix />
          }
      </div>
    );
  }
}

export default App;
