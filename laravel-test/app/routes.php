<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

//Route::get('/', 'Showcontroller@showDataWelcome');

//Route::controller('users', 'UserController');

Route::resource('users', 'UserController');
Route::post('/users', 'UserController');
Route::get('/users', 'UserController');

Route::get('/', function()
{
	return View::make('index');
});