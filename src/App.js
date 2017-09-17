import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GeoButton from './components/geo-button';
import Camera from './components/camera';
import Cursor from './components/cursor';
import GeoDisplay from './components/geo-display';

class App extends Component {

  constructor(){
    super();
    this.state = {
      shape:'cube',
      color: 'red'
    }
  }

  handleClick (ev){
    console.log("clicked", ev);
    this.setState({color:ev.color, shape:ev.shape});
  }

  render() {
    return (
      <Scene>
        <Camera><Cursor/></Camera>
        <a-sky color="#222"></a-sky>
        <GeoButton position="-1 2 -2" color="red" size="0.5" shape="circle" label="cube" 
        onClick={(ev) => this.handleClick(ev)}></GeoButton>
        <GeoButton position="0 2 -2" color="blue" size="0.5" shape="circle" label="piramid"
        onClick={(ev) => this.handleClick(ev)}></GeoButton>
        <GeoButton position="1 2 -2" color="green" size="0.5" shape="circle" label="sphere"
        onClick={(ev) => this.handleClick(ev)}></GeoButton>
        <GeoDisplay position="-1 0.5 -3" shape={this.state.shape} color={this.state.color} size="1" />
      </Scene>
    );
  }
}

export default App;
