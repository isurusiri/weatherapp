import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { getWeather } from './api';
import WeatherCard from './WeatherCard';

let testData = [
    {
        "lat" : 6.9271,
        "lng" : 79.8612
     }
];

class Home extends Component {

    state = {
        weatherData: {}
    }

    componentDidMount() {
        getWeather(testData).then(weatherData => this.setState({weatherData: {
                    temperatureC: weatherData.locations[0].weather.temperatureC,
                    cloudinessPercent: weatherData.locations[0].cloudinessPercent,
                    humidityPercent: weatherData.locations[0].humidityPercent,
                    city: 'Colombo, Sri Lanka',
                    date: 'SEP 6'
                }}));
    }

    render() {

        let weatherInfo = {};

        if (this.state.weatherData) {
           weatherInfo = (<WeatherCard weatherItem={this.state.weatherData} />);
        }

        return (
            <View>{weatherInfo}</View>
        );
    }
}

export default Home;
