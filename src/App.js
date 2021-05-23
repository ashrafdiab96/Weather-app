import React, {Component} from 'react';
import './App.css';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

const API_KEY = '11c120f83512a4f2cb8a7a44c4410e96';
class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const api = await fetch(URL);
    const data = await api.json();
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please, Choose The City'
      });
    }
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather} />
          <Weather
            temperature = {this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            error = {this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
