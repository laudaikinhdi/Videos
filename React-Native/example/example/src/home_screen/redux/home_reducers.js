import {types} from "./home_actions";

const initialState = {
    color: "blue"
};

export default function (state = initialState, action = {}) {
    switch (action.type){
        case types.CHANGE_COLOR+"_SUCCESS":
            return{
                ...state,
                color: action.payload.color
            };
        default:
            return state;
    }
}
