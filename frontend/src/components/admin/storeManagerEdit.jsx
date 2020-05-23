import React, { Component } from 'react';
import axios from 'axios';

export default class storeManagerEdit extends Component {

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactno = this.onChangeContactno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      contactNo:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/api/storeManager/update/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                name: response.data.name, 
                email: response.data.email,
                contactNo: response.data.contactNo });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeName(e) {
    this.setState({
        name: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
        email: e.target.value
    })  
  }
  onChangeContactno(e) {
    this.setState({
        contactNo: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      email: this.state.email,
      contactNo: this.state.contactNo
    };
    axios.post('http://localhost:4000/api/storeManager/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update storeManager</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.contactNo}
                      onChange={this.onChangeContactno}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}