import {delay} from 'redux-saga';
import {select, put, takeLatest, take, cancel} from 'redux-saga/effects';
import {types} from "./home_actions";


export function* changeColor(data) {
    console.log(data);
    let dataColor = {
        color: "red",
    };

    yield put({type: types.CHANGE_COLOR+"_SUCCESS", payload: dataColor});
}


export function* watchChangeColor() {
    yield takeLatest(types.CHANGE_COLOR,changeColor);
}
