import React from 'react';
import './App.css';
import Header from './header/header.js';
import Sidebar from './sidebar/sidebar.js';
import Content from './content/content.js';
import UserList from './User/userlist.js';

class App extends React.Component {

  constructor()
  {
      super();
      this.state =
      {
          userList:
              [
                "Aman Khullar",
                "Abhay Chauhan",
                "Anil Kadam",
                "Mahi Dhoni",
                "Yatharth Sant",
                "Govind Sanap"
              ],
          selected:0
      }
  }
  

  update(newName){
      let mylist=this.state.userList;
      
      mylist[this.state.selected]= newName;
      this.setState({
          userList: mylist
      });
  }
  updateSelected(select) {
      this.setState({
          selected:select
      })
  }
 
  render() {
    return ( 
      <div className="App">
        <Header/>
        <Sidebar
             userList={this.state.userList}
              funcChangeCurrentSelectedUser={this.updateSelected.bind(this)}
            />
        <Content 
              userList={this.state.userList[this.state.selected]}
              funcUpdateCurrentSelectedUser={this.update.bind(this)}
            />
      </div>
    );
  }
  
}
export default App;