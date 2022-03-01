import React, { Component } from 'react'

export class ChercheUser extends Component {

    state = {
        cherche: ''
    }

    handleForm = (e) => {
        this.setState({
            cherche: e.target.value
        })
    }

    chercheUser = (e) => {
        e.preventDefault();
        this.props.getUserCherche(this.state.cherche);
        }
        
  render() {
     const { cherche } = this.state;
    return (

          <form onSubmit={this.chercheUser}>
            <div className='form-group my-2'>
                <input onChange={this.handleForm} value={cherche} placeholder='Cherche users...' id='cherche' type='text' className='form-control'/>
            </div>
            <button className='btn btn-danger btn-block'>Chercher</button>
          </form>
    )
  }
}

export default ChercheUser