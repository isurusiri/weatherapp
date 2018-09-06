import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    weatherItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    weatherItem: {
        width: '25%',
        flex: 1
    },
    weatherItemText: {
        fontSize: 40,
        textAlign: 'center'
    },
    weatherItemLabel: {
        fontSize: 13,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign: 'right'
    },
    city: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left'
    }
});

class WeatherCard extends Component {
    
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.weatherItemContainer}>
                    <View style={styles.weatherItem}>
                        <Text style={styles.weatherItemText}>{this.props.weatherItem.temperatureC}</Text>
                        <Text style={styles.weatherItemLabel}>Temperature `C</Text>
                    </View>
                    <View style={styles.weatherItem}>
                        <Text style={styles.weatherItemText}>{this.props.weatherItem.cloudinessPercent}</Text>
                        <Text style={styles.weatherItemLabel}>Cloudiness %</Text>
                    </View>
                    <View style={styles.weatherItem}>
                        <Text style={styles.weatherItemText}>{this.props.weatherItem.humidityPercent}</Text>
                        <Text style={styles.weatherItemLabel}>Humidity %</Text>
                    </View>
                </View>
            </View>
        );
    }
} 

export default WeatherCard;
