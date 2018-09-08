import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

import { getWeather } from './api';
import WeatherCard from './WeatherCard';
import { getCurrentDateAndMonth } from './dateTimeFormatter';

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
    },
    animationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3'
    },
    animation: {
        width: 150,
        height: 150
    }
});

class Home extends Component {

    state = {
        weatherData: []
    }

    componentDidMount() {
        let currentDate = getCurrentDateAndMonth();
        getWeather(testData).then(weatherData => this.setState({weatherData: weatherData.locations.map(weatherDatum => (
            {
                temperatureC: weatherDatum.weather.temperatureC,
                cloudinessPercent: weatherDatum.weather.cloudinessPercent,
                humidityPercent: weatherDatum.weather.humidityPercent,
                city: 'Colombo, Sri Lanka',
                date: currentDate
            }
        ))}));
    }

    render() {

        return [
            <FlatList 
                style={styles.list}
                data={this.state.weatherData}
                renderItem={({ item }) => <WeatherCard weatherItem={item} />}
                keyExtractor={item => item.temperatureC.toString()}
                key="listfield"
            />,
            <View key="animcontainer" style={styles.animationContainer} >
                <Image  style={styles.animation} source={require('./Weather-Umbrella.gif')}/>
            </View>
        ];
    }
}

export default Home;
