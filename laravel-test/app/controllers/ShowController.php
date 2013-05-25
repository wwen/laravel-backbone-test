<?php
	
class ShowController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/
	public function showDataWelcome()
	{	
		//$user=get_data::data();
		//return View::make('register', array('name'=>$user));
		save_data::insert_data();
	}

}