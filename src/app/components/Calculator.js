import React from 'react';
import { Link} from "react-router-dom";
import Button from './Button'
import Text from './Text'
import './index.less'

class Calculator extends React.Component{
  constructor(){
    super();
    this.state = {
      value: '' 
    }
  }

  handleButton(e){
    if (e.target.value!==undefined){
        let instring=e.target.value;
        let prvcontent=this.state.value;
        let content="";
        if (instring==="+"||instring==="-"||instring==="*"||instring==="/"){
            content=prvcontent+" "+instring+" ";
        }
        else if (instring==="Clear"){
            content="";
        }
        else if (instring==="="){
            let arr=prvcontent.split(" ");
            let ans=[];
            let i=0;
            while (i<arr.length){
                if (arr[i]==="")
                    i++;
                else if (arr[i]==="+"){
                    ans.push(arr[i+1]);
                    i+=2;
                }
                else if (arr[i]==="-"){
                    ans.push(-arr[i+1]);
                    i+=2;
                }
                else if (arr[i]==="*"){
                    let a;
                    let b=ans.pop();
                    if(arr[i+1]==="-"){
                        a=-arr[i+2];
                        i+=3;
                    }
                    else {
                        a=arr[i+1];
                        i+=2;
                    }
                    ans.push(b*a);
                }
                else {
                    ans.push(arr[i]);
                    i++;
                }
            }
            let fin_ans=parseFloat(ans[0]);
            for (i=1;i<ans.length;i++)
                fin_ans+=parseFloat(ans[i]);
            content=prvcontent+instring+fin_ans;
        }
        else{
            content=prvcontent+instring;
        }
        this.setState({
          value:content
        })
    }
}
  render() {
    
    return (
      <div className="content_constructor">
        <div className="title">在线计算器</div>
        <div id="main">
          <div id="input_text">
              <Text value={this.state.value}/>
          </div>
          <div id="input_button" onClick={this.handleButton.bind(this)}>
              <Button value={"+"} className={"same_back"}/>
              <Button value={"-"} className={"same_back"}/>            
              <Button value={"*"} className={"same_back"}/>
              <Button value={7} className={"same_back_orange"}/>
              <Button value={8} className={"same_back_orange"}/>
              <Button value={9} className={"same_back_orange"}/>
              <Button value={4} className={"same_back_orange"}/>
              <Button value={5} className={"same_back_orange"}/>
              <Button value={6} className={"same_back_orange"}/>
              <Button value={1} className={"same_back_orange"}/>
              <Button value={2} className={"same_back_orange"}/>
              <Button value={3} className={"same_back_orange"}/>
              <Button value={0} className={"same_back_orange"}/>
              <Button value={"Clear"} className={"equal_size_clear"}/>
              <Button value={"="} className={"equal_size"}/>        
          </div>
      </div>
      <p><Link  to='/'>回到主页</Link></p>
    </div>
   );
  }
  
}


export default Calculator;