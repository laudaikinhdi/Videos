import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        //vue-socket.io
        join: false,
        name: null,
        users: null,
        message: null,
        messages: [{
            message: 'tan',
            name: 'tanmnt'
        }]
        //end


		// let activeRowIndex = -1;
		// let activeColumnIndex = -1;
		//
		// let columns = ['row', 'name', 'date1', 'date2'];
		//
		// let data = [
			// {
			// 	row: 1,
			// 	name: 'Chuck Norris',
			// 	date1: '7',
			// 	date2: '7'
			// }, {
			// 	row: 2,
			// 	name: 'Bruce Lee',
			// 	date1: '3',
			// 	date2: '3'
			// }, {
			// 	row: 3,
			// 	name: 'Jackie Chan',
			// 	date1: '11',
			// 	date2: '11'
			// }, {
			// 	row: 4,
			// 	name: 'Jet Li',
			// 	date1: 'xs',
			// 	date2: 'xs'
			// }, {
			// 	row: 5,
			// 	name: 'Donnie Yen',
			// 	date1: '8a',
			// 	date2: '8a'
			// }, {
			// 	row: 6,
			// 	name: 'Jason Statham',
			// 	date1: 'B',
			// 	date2: 'B'
			// }
		// ];
		//
		// return {
			// activeRowIndex,
			// activeColumnIndex,
			// columns,
			// data
		// };
	},
    getters: {

    },
	mutations: {
		ACTIVE_CELL_POSITION: (state, rowIndex, columnIndex) => {
			state.activeRowIndex = rowIndex;
			state.activeColumnIndex = columnIndex;
		},

        SOCKET_CONNECT: (state, status) => {
            state.join = status;
        },
        SOCKET_USER_MESSAGE: (state,  message) => {
            state.message = message;
        }
	},
    actions: {

    }
})
