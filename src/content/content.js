import React from 'react';

import './content.css';
class Content extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {
            fn: props.userList.split(" ")[0],
            ln: props.userList.split(" ")[1]
        }
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.setState({
            fn: newProps.userList.split(" ")[0],
            ln: newProps.userList.split(" ")[1]
        })
    }
    render()
    {
        let userlist=this.props.userList;
        console.log(userlist);
        let fname = userlist.split(" ")[0];
        let lname = userlist.split(" ")[1];
        return(
        <div className="App">
            
                <div className="container">
                    <div>
                    <label for="uname"><b>First Name: &ensp;</b></label>
                    <input type="text"  placeholder="First Name" name="uname" value={this.state.fn} onChange={e => this.setState({fn: e.target.value})} />
                    </div>

                    <div>
                    <label for="psw"><b>Last Name: &ensp;</b></label>
                    <input type="text" className="input1" placeholder="Last Name" name="psw" value={this.state.ln} onChange={e => this.setState({ln: e.target.value})}/>
                    </div>
                    
                    <button type="submit"  onClick={() => this.props.funcUpdateCurrentSelectedUser(this.state.fn+" "+this.state.ln)} > Login</button>
                    </div>
            
        </div>
        );
    }
}
export default Content;