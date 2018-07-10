import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  "01": {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    icon: "weather-sunny"
  },
  "02": {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    icon: "weather-cloudy"
  },
  "03": {
    colors: ["#D7D2CC", "#304352"],
    title: "Scattered Clouds",
    icon: "weather-cloudy"
  },
  "04": {
    colors: ["#D7D2CC", "#304352"],
    title: "Broken Clouds",
    icon: "weather-cloudy"
  },
  "09": {
    colors: ["#00C6FB", "#005BEA"],
    title: "Shower Rain",
    icon: "weather-rainy"
  },
  "10": {
    colors: ["#00C6FB", "#005BEA"],
    title: "Rain",
    icon: "weather-rainy"
  },
  "11": {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    icon: "weather-lightning"
  },
  "13": {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    icon: "weather-snowy"
  },
  "50": {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Mist",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temperature, cityName, aqi }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Text style={styles.cityName}>{cityName}</Text>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temperature}>temp: {temperature}℃</Text>
        <Text style={styles.temperature}>aqi: {aqi}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>For more info look outside!</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  cityName: {
    fontSize: 40,
    color: "white",
    marginBottom: 10
  },
  temperature: {
    fontSize: 35,
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 35,
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 25,
    color: "white",
    marginBottom: 50
  }
});

export default Weather;
