import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { PAYPAL_CLIENT_ID } from '../Constants';

/**
 * REFERENCES:
 *   1. 'react-paypal-express-checkout' github repo:
 *      https://github.com/thinhvo0108/react-paypal-express-checkout
 *   2.
 */

class App extends Component {
    render() {
        const client = {
            sandbox:    PAYPAL_CLIENT_ID,
            production: 'Your-Production-Client-ID',
        }

        return (
          <div className="App">
              <PaypalExpressBtn client={client} currency={'USD'} total={0.01} />
          </div>
        );
    }
}

export default App;