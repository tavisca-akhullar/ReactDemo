import App from '../App.js';
import React from 'react';
import Sidebar from '../sidebar/sidebar.js'
//import Content from '../content.js';
class UserList extends React.Component {
    constructor()
    {
        super();
        this.state =
        {
            userList:
                [
                    {
                        name:"Aman Khullar"
                    },
                    {
                        name:"Abhay Chauhan"
                    }
                ],
            selected:0
        }
    }
    

    // update(newName){
    //     let mylist=this.state.userList;
    //     mylist[this.state.selected]= {name:newName};
    //     this.setState({
    //         userList:mylist
    //     });
    // }

    // updateSelected(select) {
    //     this.setState({
    //         selected:select
    //     });
    // }

    render() {
        console.log(this.state)
        return (
          <div className="content">
          <Sidebar
           userList={this.state.userList}
            funcChangeCurrentSelectedUser={this.updateSelected.bind(this)}
          />
        </div>
      );
    }
}
export default UserList