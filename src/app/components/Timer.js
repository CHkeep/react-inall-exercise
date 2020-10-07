import React from 'react';
import { Link} from "react-router-dom";

import './index.less'

class Timer extends React.Component{
  state = {
    time: '', 
    value:'Start'
  }

  timeChange=(event)=>{
    this.setState({
      time:event.target.value
    });
  }

  handleSubmit=()=>{
    clearInterval(this.timer)  
    this.timer=setInterval(()=>{
      this.setState({
          time:this.state.time-1
      },()=>{
          if(this.state.time <= 0){
            this.setState({
              value:'End'
             }),
              clearInterval(this.timer)
              return
          }
      })
    },1000)    
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }



  render() {
    
    return (
      <div className="timer">
        <div className="title">在线倒计时器</div>
        <div className="content_timer">
          <div className="input_timer">
              <label>设置时间
              <input type="text" name='time' value={this.state.time} onChange={this.timeChange}/>                   
              </label>              
                <input className="start" type="button" value={this.state.value} onClick={this.handleSubmit}/>           
          </div>
          <div className="share_timer">
            <h2>{this.state.time}     Seconds</h2>  
          </div>
        </div>
      <div className="link"><Link  to='/'>回到主页</Link></div>
    </div>
   );
  }
  
}


export default Timer;