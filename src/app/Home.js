import React from 'react';
import './home.less';
import { Link} from "react-router-dom";

const Home = () => {
  return (<div className="home">
     <div className="logo">在线实用工具</div>
     <div className="content">
       <div>
         <Link  to='/calculator'>计算器</Link>
        </div>
       <div><Link  to='/timer'>倒计时器</Link></div>
     </div>
  </div>);
};

export default Home;