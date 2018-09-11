import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

import { getWeather, getLocationByGeoCoordinates } from './api';
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
        alignSelf: 'center',
        height: 250,
        width: 350
    }
});

class Home extends Component {

    state = {
        weatherData: [],
        imageSource: require('./resources/jacket.gif')
    }

    componentDidMount() {
        let currentDate = getCurrentDateAndMonth();
        let notUpdated = true;
        getWeather(testData).then(weatherData => {
            getLocationByGeoCoordinates(testData[0].lat, testData[0].lng).then(geoLocationData => {
                notUpdated = false;
                this.setState({weatherData: weatherData.locations.map(weatherDatum => (
                    {
                        temperatureC: weatherDatum.weather.temperatureC,
                        cloudinessPercent: weatherDatum.weather.cloudinessPercent,
                        humidityPercent: weatherDatum.weather.humidityPercent,
                        city: (geoLocationData.results[0].components.city? geoLocationData.results[0].components.city : geoLocationData.results[0].components.town) + ', ' + geoLocationData.results[0].components.country,
                        date: currentDate
                    }
                ))}
            );
            if (notUpdated) {
                this.setState({weatherData: weatherData.locations.map(weatherDatum => (
                    {
                        temperatureC: weatherDatum.weather.temperatureC,
                        cloudinessPercent: weatherDatum.weather.cloudinessPercent,
                        humidityPercent: weatherDatum.weather.humidityPercent,
                        city: 'The Universe',
                        date: currentDate
                    }
                ))});  
            }
        }) 
    })};

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
