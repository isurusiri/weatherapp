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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3'
    },
    animation: {
        alignSelf: 'center'
    }
});

class Home extends Component {

    state = {
        weatherData: [],
        imageSource: require('./resources/cloudy.png')
    }

    selectWeatherImage = (temperature, cloudiness, humidity) => {
        if (temperature >= 27 && cloudiness >= 40) {
            this.setState({imageSource: require('./resources/cloudy-sunny.png') });
        } else if (temperature >= 0 && temperature < 27) {
            this.setState({imageSource: require('./resources/cloudy.png') });
        } else if (temperature <= 0) {
            this.setState({imageSource: require('./resources/snowy.png') });
        } else if (cloudiness > 50 && humidity > 50) {
            this.setState({imageSource: require('./resources/rainy.png') });
        }
    }

    componentDidMount() {
        let currentDate = getCurrentDateAndMonth();
        getWeather(testData).then(weatherData => {
            this.setState({weatherData: weatherData.locations.map(weatherDatum => (
            {
                temperatureC: weatherDatum.weather.temperatureC,
                cloudinessPercent: weatherDatum.weather.cloudinessPercent,
                humidityPercent: weatherDatum.weather.humidityPercent,
                city: 'Colombo, Sri Lanka',
                date: currentDate
            }
        ))})
        this.selectWeatherImage(weatherDatum.weather.temperatureC, weatherDatum.weather.cloudinessPercent, weatherDatum.weather.humidityPercent);
    });
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
                <Image  style={styles.animation} source={this.state.imageSource}/>
            </View>
        ];
    }
}

export default Home;
