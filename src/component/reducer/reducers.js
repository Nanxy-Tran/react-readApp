import {
    UPDATE_HEALTH,
    UPDATE_STRESS,
    UPDATE_TYPE,
    UPDATE_MOTIVATE,
    UPDATE_TIME,
    UPDATE_WEATHER
} from '../actions/actions';
//reducer
const initialState = {};

export default function updater(state = initialState, action) {
    switch (action.type) {
        case UPDATE_HEALTH: 
            return Object.assign({}, state,{health: action.payload})
        case UPDATE_STRESS: 
            return Object.assign({}, state, {stress: action.payload})
        case UPDATE_TYPE:
            return Object.assign({}, state, {type: action.payload})
        case UPDATE_MOTIVATE:
            return Object.assign({}, state, {motivate: action.payload})
        case UPDATE_TIME: 
            return Object.assign({}, state, {time: action.payload})
        case UPDATE_WEATHER:
            return Object.assign({}, state, {weather: action.payload})   
        default: return state     
    }
}