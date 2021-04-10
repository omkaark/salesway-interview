import React, { Component } from 'react';
import './App.css';
import PastResult from './components/PastResult';
import Result from './components/Result';

class App extends Component {
  state = {
    currentSearch: {},
    pastSearches: [],
  };

  constructor(props) {
    super(props);
  }

  setSearch(data) {
    this.currentSearch = {city: data.name, icon: this.processImgSrc(data.weather[0].icon), temperature: data.main.temp};
    this.setState({currentSearch: this.currentSearch})
    if(this.state.pastSearches.length<=4) {
      this.state.pastSearches.unshift(this.currentSearch);
    } else {
      this.state.pastSearches.pop();
      this.state.pastSearches.unshift(this.currentSearch);
    }
    this.setState({currentSearch: this.currentSearch});
  }

  handleSubmit(inp) {
    if(inp != "") {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="+inp+"&appid=c3f905ff0a6cf9e4483e3643929c42da"
      )
        .then((res) => res.json())
        .then((data) => this.setSearch(data))
        .catch(error => console.log("Invalid Name"));
    } else {
      this.state.currentSearch = {};
      this.setState({currentSearch: this.currentSearch});
    }
  }

  processImgSrc(src) {
    console.log(src);
    return (
      "http://openweathermap.org/img/wn/" +
      src +
      "@2x.png"
    );
  }

  getSearchId() {
    if(Object.keys(this.state.currentSearch).length === 0) {
      return "nodisp"
    } else {
      return "result-container";
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="heading-container">
          <span>Weather App</span>
        </div>
        <div id="city-container">
          <div id="search-container">
            <input id="city-inp" />
            <button onClick={() => this.handleSubmit(document.getElementById("city-inp").value)} id="submit"><img id="search" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"></img></button>
          </div>
          <div id={this.getSearchId()}>
            <Result toDisplay={this.state.currentSearch} />
          </div>
        </div>
        <div id="prev-searches"><br/>
          <span id="subtitle">Your previous searches</span>
          { this.state.pastSearches.map(res => <PastResult key={res} toDisplay={res}></PastResult>) }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
