import React, { Component } from 'react';
import {
  Button
} from 'react-bootstrap';
import {
  NavLink,
  withRouter
} from 'react-router-dom';

class PreSets extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let searchQuery = e.target.id;
    this.props.handler(e, e.target.id);
    let path =`/search/${searchQuery}`;
    this.props.history.push(path);
  }

  render() {
      return (
      <div className="presets">
        <NavLink to='/search/glacier'><Button id="glacier" onClick={this.handleSubmit}>
          Glacier
        </Button></NavLink>
        <NavLink to='/search/waterfall'><Button id="waterfall" onClick={this.handleSubmit}>
          Waterfall
        </Button></NavLink>
        <NavLink to='/search/gorge'><Button id="gorge" onClick={this.handleSubmit}>
          Gorge
        </Button></NavLink>
      </div>
    );
  }
}

export default withRouter(PreSets)
