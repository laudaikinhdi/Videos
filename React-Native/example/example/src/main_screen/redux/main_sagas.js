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

    let params = null;
    let options = {
        method: "GET", //POST , PUT , DELETE
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTUzNTcxNjI2NiwiZXhwIjoxNTM4MzA4MjY2fQ.gRdUguOVXCWvy_GAmenwmEe71E2ujc4cXgXuq96FnMk'
        },
        body: params?JSON.stringify(params):null
    };

    let result = yield fetch("https://api.oscar-cms.jp/api/silderinfo",options)
                        .then(resp=> {
                            let json = resp.json();
                            if(resp.ok){
                                return json
                            }

                            return json.then(e => {
                                throw e;
                            });
                        })
                        .then(data=>{
                            return data;
                        })
                        .catch(e=>{
                            console.log(e);
                            cb && cb();
                        });

    yield put({type: types.LOAD_DATA+"_SUCCESS", payload: result});
    data.cb && data.cb(result);
}


export function* watchLoadData() {
    console.log('main sagas watchLoadData');
    yield takeLatest(types.LOAD_DATA,loadData);
}
