import React from 'react';
import './home.less';
import { Link} from "react-router-dom";
import URL from "../images/calculator.png"
import URLTimer from "../images/Timer.png"

const Home = () => {
  return (<div className="home">
     <div className="logo">在线实用工具</div>
     <div className="content">
       <div className="calculator">
         <img src={URL} className="calculatorImg"/>
         <p><Link  to='/calculator'>计算器</Link></p>
        </div>
       <div className="timer">
          <img src={URLTimer} className="timerImg"/>
          <p><Link  to='/timer'>倒计时器</Link></p>
        </div>
     </div>
  </div>);
};

export default Home;