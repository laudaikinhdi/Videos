import { combineReducers } from 'redux';
import Main from '../main_screen/redux/main_reducers';
import Home from '../home_screen/redux/home_reducers';

export default combineReducers({
    main: Main,
    home: Home
});
