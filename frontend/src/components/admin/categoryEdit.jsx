import React, { Component } from 'react';
import axios from 'axios';
import { environment } from '../../configs/environment';

export default class categoryEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeFeatured = this.onChangeFeatured.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      featured: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        environment.baseURL + 'category/delete' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          name: response.data.name,
          description: response.data.description,
          featured: response.data.featured,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
        description: e.target.value,
    });
  }
  onChangeFeatured(e) {
    this.setState({
      featured: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      description: this.state.description,
      featured: this.state.featured,
    };
    axios
      .post(
        environment.baseURL + 'category/update' +
          this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update storeManager</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Person Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Business Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>GST Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.featured}
              onChange={this.onChangeFeatured}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
