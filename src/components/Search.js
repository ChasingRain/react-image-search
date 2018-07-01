import React, { Component } from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Search extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let searchQuery = this.search.value;
    this.props.handler(e, this.search.value);
    let path =`/search/${searchQuery}`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Form inline className='justify-content-center' onSubmit={this.handleSubmit}>
            <input
              type="search"
              ref={(input) => this.search = input}
              className="form-control"
              onChange={this.onSearchChange}
              name="search"
              placeholder="Search Images..."
            />
          <Button type="submit" className='btn-primary'>
            search
          </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(Search)
