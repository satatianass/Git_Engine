import React, { Component } from 'react'
import axios from 'axios';
import User from './User';
import ChercheUser from './ChercheUser';

export class Users extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users: []
    }
  }  

  getUsers = () => {
    axios.get('https://api.github.com/users')
    .then(response => {
      this.setState({
        users: response.data
      })
    })
  }
  componentDidMount() {
    this.getUsers();
  }

  chercheUserFromGit = (data) => {

    if(data != null) {
      axios.get('https://api.github.com/search/users?q=${data}')
           .then(response => {
                 this.setState({
                  users: response.data.itmes
            })    
          })          
    }
  }
 

  render() {
    return (
      <div>
        <div className='row my-2'>
          <div className='col-md-12'>
              <ChercheUser getUserCherche={this.chercheUserFromGit}/>
          </div> 
        </div>
        <div className='row'>
          {this.state.users.map(user => (
             <div className='col-md-4' key={user.id}>
             <User user={user}/>
            </div>
          ))}
        </div>
      </div>
    )
  }


}

export default Users