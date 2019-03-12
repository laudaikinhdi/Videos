<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('api/updateActiveCell', 'ActiveCellController@method');
Route::get('vue-socket', function(){
    return view('vue-socket');
});

Route::get('/send-message', 'RedisController@index');
Route::post('/send-message', 'RedisController@postSendMessage')->name('send.message');
