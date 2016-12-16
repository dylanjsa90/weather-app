const IS_FETCHING = 'IS_FETCHING';
const REQUEST_WEATHER = 'REQUEST_WEATHER';
const RECEIVED_WEATHER = 'RECEIVED_WEATHER';
const SET_STATE = 'SET_STATE';

export function setState(state) {
  return {
    type: SET_STATE,
    state
  }
}


export function isFetching(weatherData) {
  return {
    type: IS_FETCHING,
    weatherData
  }
}

export function requestWeatherData(weatherData) {
  return {
    type: REQUEST_WEATHER,
    weatherData
  }
}


export function receiveWeatherData(weatherData, json) {
  return {
    type: RECEIVED_WEATHER,
    weatherData,
    weather: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}