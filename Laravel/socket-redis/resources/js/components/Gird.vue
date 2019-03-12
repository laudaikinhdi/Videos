<template>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th v-for="key in columns">
                        {{ key }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rowIndex, entry) in data">
                    <td v-for="(columnIndex, key) in columns"
						class="cell"
						:class="{activeRow: entry == activeRowIndex,
                                 activeColumn: key == activeColumnIndex}"
					>

                        <div class="view">
                            <label @click="makeCellActive(entry, key)"
							>{{ rowIndex[columnIndex] }}</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
	import io from 'socket.io-client';
    var socket = io('http://localhost:6001');
	import { updateActiveCellPosition } from '../vuex/action';
	export default {
		vuex: {
			actions: {
				// es6 shorthand
				updateActiveCellPosition
			},
			getters: {
				// columns: state => state.columns,
				// data: state => state.data,
				// add active cell highlight
				// activeRowIndex: state => state.activeRowIndex,
				// activeColumnIndex: state => state.activeColumnIndex
			}
		},
        data(){
			return {
				columns: ['row', 'name', 'date1', 'date2'],
                data: [
					{
						row: 1,
						name: 'Chuck Norris',
						date1: '7',
						date2: '7'
					}, {
						row: 2,
						name: 'Bruce Lee',
						date1: '3',
						date2: '3'
					}, {
						row: 3,
						name: 'Jackie Chan',
						date1: '11',
						date2: '11'
					}, {
						row: 4,
						name: 'Jet Li',
						date1: 'xs',
						date2: 'xs'
					}, {
						row: 5,
						name: 'Donnie Yen',
						date1: '8a',
						date2: '8a'
					}, {
						row: 6,
						name: 'Jason Statham',
						date1: 'B',
						date2: 'B'
					}
				],
				activeRowIndex: -1,
				activeColumnIndex: -1
            }
        },
		mounted() {
		    let _vm = this;
			socket.on('clicked-cell-channel:table', function(data) {
                console.log('tanmnt', data);
                _vm.ACTIVE_CELL_POSITION(data.rowIndex, data.columnIndex);
			});
		},
		methods: {
			// called on as a result of user clicking on cell
			makeCellActive(rowIndex, columnIndex) {
				this.ACTIVE_CELL_POSITION(rowIndex, columnIndex);
				Vue.http.post('api/updateActiveCell', { rowIndex, columnIndex });
			},
			ACTIVE_CELL_POSITION: function(rowIndex, columnIndex) {
				this.activeRowIndex = rowIndex;
				this.activeColumnIndex = columnIndex;
			}
		},
        computed: {
			// activeRowIndex: function(){
				// console.log(12321)
				// return this.activeRowIndex1;
            // },
			// activeColumnIndex: function(){
				// return this.activeRowIndex1;
            // },
            data1: function () {
                return this.data;
			}
        }
	}
</script>

<style>
    body {
		font-family: Helvetica Neue, Arial, sans-serif;
		font-size: 14px;
		color: #444;
	}
	table {
		border: 2px solid #42b983;
		border-radius: 3px;
		background-color: #fff;
	}
	th {
		background-color: #42b983;
		color: rgba(255, 255, 255, 0.66);
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-user-select: none;
	}
	td {
		background-color: #f9f9f9;
	}
	.cell {
		width: 200px;
	}
    .cell.activeRow.activeColumn {
        background-color: #B2DECA;
    }
	.view label {
		white-space: pre;
		word-break: break-word;
		padding: 6px;
		display: block;
		line-height: 1.2;
		transition: color 0.4s;
	}
	.cell.editing .view {
		display: none;
	}
	th,
	td {
		min-width: 120px;
	}
</style>
