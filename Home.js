import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import { getWeather } from './api';
import WeatherCard from './WeatherCard';

let testData = [
    {
        "lat" : 6.9271,
        "lng" : 79.8612
     }
];

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

class Home extends Component {

    state = {
        weatherData: []
    }

    componentDidMount() {
        getWeather(testData).then(weatherData => this.setState({weatherData: weatherData.locations.map(weatherDatum => (
            {
                temperatureC: weatherDatum.weather.temperatureC,
                cloudinessPercent: weatherDatum.weather.cloudinessPercent,
                humidityPercent: weatherDatum.weather.humidityPercent,
                city: 'Colombo, Sri Lanka',
                date: 'SEP 6'
            }
        ))}));
    }

    render() {

        return (
            <FlatList 
                style={styles.list}
                data={this.state.weatherData}
                renderItem={({ item }) => <WeatherCard weatherItem={item} />}
                keyExtractor={item => item.temperatureC.toString()}
            />
        );
    }
}

export default Home;
