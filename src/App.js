import React, { Component } from 'react';
import { Grid, Jumbotron} from 'react-bootstrap';
import apiKey from "./config";
import axios from 'axios';
import Search from './components/Search';
import Navigation from './components/Navigation';
import PreSets from './components/PreSets';
import ImageList from './components/ImageList';
import ImageSearch from './components/ImageSearch';
import NotFound from './components/404';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      images: [],
      search: "",
      path: window.location.pathname.split("/").pop(),
      results: ""
    };
  }

  handler(e, value){
    e.preventDefault();
    let searchQuery = value;
    this.setState({
      search: searchQuery
    })
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=50&format=json&nojsoncallback=true`)
    .then(response => {
        this.setState({
          images: response.data.photos.photo,
          results: response.data.photos.photo.length
        });
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
    // let path =`/search/${searchQuery}`;
    // this.props.history.push(path);
  }

  componentDidMount() {
    let loadSearch = "mountains"
    if(this.state.path!=""){
      loadSearch = this.state.path;
    }
    this.setState({
      search: loadSearch
    })
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${loadSearch}&per_page=50&format=json&nojsoncallback=true`)
    .then(response => {
        console.log(response)
        this.setState({
          images: response.data.photos.photo,
          results: response.data.photos.photo.length
        });
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
        <div className="banner-image">
          <Jumbotron className='banner'>
              <Grid className='banner-form'>
                <h1>Image Search</h1>
                <p>This is an image search app</p>
                <Search handler = {this.handler}/>
                <PreSets handler = {this.handler}/>
              </Grid>
          </Jumbotron>
        </div>
        <Switch>
          <Route exact path="/" render={ () => <ImageList data={this.state.images} value={this.state.search} results={this.state.results}/>} />
          <Route exact path="/search/:searchQuery" render={ () => <ImageList value={this.state.search} data={this.state.images} results={this.state.results}/>} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </ BrowserRouter>
    );
  }
}
