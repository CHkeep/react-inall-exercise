import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Home from "./Home";
import Calculator from "./components/Calculator";
import Timer from "./components/Timer"

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter> 
          <ul className='menu'>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/calculator'>在线计算器</Link></li>
            <li><Link to='/timer'>在线倒计时器</Link></li>  
          </ul>  
          <div className='content'>        
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route  path='/calculator' component={Calculator}/>
              <Route  path='/timer' component={Timer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
