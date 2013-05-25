<?php
//use Illuminate\Auth\UserInterface;
//use Illuminate\Auth\Reminders\RemindableInterface;

	class get_data {
		public static function data(){
			$result='haha';
			$result=DB::table('user')->get();
			
			return $result;	
		}
	}	
	
?>