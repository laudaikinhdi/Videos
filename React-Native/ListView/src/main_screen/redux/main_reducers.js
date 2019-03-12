import {types} from "./main_actions";

const initialState = {
    login: null,
    data: null
};

export default function (state = initialState, action = {}) {
    switch (action.type){
        case types.LOGIN+"_SUCCESS":
            return{
                ...state,
                login: action.payload
            };
        case types.LOAD_DATA+"_SUCCESS":
            console.log('main reducers loadData');
            return{
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}
