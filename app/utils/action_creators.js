
export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function getWeather(query) {
  return {
    type: 'GET_WEATHER',
    
  }
}