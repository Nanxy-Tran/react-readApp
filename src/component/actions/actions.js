{/* actions type*/}
export const UPDATE_HEALTH = 'UPDATE_HEALTH';
export const UPDATE_STRESS = 'UPDATE_STRESS';
export const UPDATE_TYPE = 'UPDATE_TYPE';
export const UPDATE_MOTIVATE = 'UPDATE_MOTIVATE';
export const UPDATE_TIME = 'UPDATE_TIME';
export const UPDATE_WEATHER = 'UPDATE_WEATHER';
{/*action creator */} 
export function updateHealth (value) {
    return {
        type: UPDATE_HEALTH,
        payload: value
    }
}
export function updateStress (value) {
    return {
        type: UPDATE_STRESS,
        payload: value
    }
}
export function updateType (value) {
    return {
        type: UPDATE_TYPE,
        payload: value
    }
}
export function updateMotivate (value) {
    return {
        type: UPDATE_MOTIVATE,
        payload: value
    }
}
export function updateTime (value) {
    return {
        type: UPDATE_TIME,
        payload: value
    }
}
export function updateWeather (value) {
    return {
        type: UPDATE_WEATHER,
        payload: value
    }
}

