import {delay} from 'redux-saga';
import {select, put, takeLatest, take, cancel} from 'redux-saga/effects';
import {types} from "./main_actions";


export function* login(data) {
    console.log(data);
    let dataLogin = {
        id: "123",
        fullName: "ABC",
        email: "abc@gmail.com"
    };

    yield put({type: types.LOGIN+"_SUCCESS", payload: dataLogin});
}


export function* watchLogin() {
    yield takeLatest(types.LOGIN,login);
}


export function* loadData(data) {

    console.log('main sagas loadData');
    let dataOld = yield select(state=> state.main.data);

    const url = `https://randomuser.me/api/?seed=1&page=${data.params.page}&results=20`;
    console.log(url);
    let result = yield fetch(url)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        return res.results;
                    })
                    .catch(error => {
                        console.log(error);
                    });
    console.log(result);
    if(dataOld){
        dataOld = [...dataOld,...result];
    }
    else{
        dataOld = result;
    }
    yield put({type: types.LOAD_DATA+"_SUCCESS", payload: dataOld});
    data.cb && data.cb(result.length);
}


export function* watchLoadData() {
    console.log('main sagas watchLoadData');
    yield takeLatest(types.LOAD_DATA,loadData);
}
