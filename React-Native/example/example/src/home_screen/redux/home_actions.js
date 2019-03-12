export const types = {
    CHANGE_COLOR: 'CHANGE_COLOR'
};


export function changeColor(params) {
    return{
        type: types.CHANGE_COLOR,
        params
    }
}
