import {all} from 'redux-saga/effects';

import {
    watchLogin,
    watchLoadData
} from "../main_screen/redux/main_sagas";

import {
    watchChangeColor
} from "../home_screen/redux/home_sagas";


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchLoadData(),
        watchChangeColor()
    ])
}
