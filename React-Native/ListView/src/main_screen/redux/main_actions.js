export const types = {
    LOGIN: 'LOGIN',

    LOAD_DATA: 'LOAD_DATA'
};


export function login(params) {
    return{
        type: types.LOGIN,
        params
    }
}

export function loadData(params,cb) {
    console.log('main actions load data');
    return{
        type: types.LOAD_DATA,
        params,
        cb
    }
}

