import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login       from './container/login'
// import Index       from './container/index'


import Footer      from './component/footer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              {/*<Route exact path='/'       component={Login}/>*/}
              <Switch>
                  <Route path={`/login`} component={Login}/>
                  <Footer/>
              </Switch>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
