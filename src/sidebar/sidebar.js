  import './sidebar.css';
import React from 'react';
class Sidebar extends React.Component
{ 
    render()
    {
        let userlist=this.props.userList;
        console.log(this.props);
        return(
            <div className="userList">
                
            <div className="row">
            <div className="col-s-3 menu sidebar">
              <ul>
              {
                  userlist.map((user,index) => (
                <li className="menu" onClick={()=>this.props.funcChangeCurrentSelectedUser(index)}><a>{user}</a></li>
                ))
            }
              </ul>
            </div>
            </div> 
                 
            </div>
        );
    }
}
export default Sidebar; 