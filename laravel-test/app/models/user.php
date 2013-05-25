<?php
	class User {
		public static function insert_data(){
			$data = json_decode(file_get_contents('php://input'), true);

			//echo serialize($data);
			$user_status = $data['status'];
			$user_type = $data['user_type'];
			$user_name = $data['user_name'];
			$user_pswd = $data['user_password'];
			$user_repswd = $data['user_repassword'];
			$phone = $data['phone'];
			$user_email = $data['email'];

			//if ($user_name == false || $user_email == false || $user_pswd == false || $user_repswd == false ) {
			//	echo ("Please fill in all the information");
			//};

			//if ($user_pswd != $user_repswd) {
				//echo ("password does not match");
			//} else {

				DB::table('user')->insertGetId(array('status'=>$user_status, 'user_type'=>$user_type, 'user_name'=>$user_name, 'user_email'=>$user_email, 'user_password'=>$user_pswd, 'user_phone'=>$phone));
				//insert('insert into User(user_name, user_email, user_password) values (?, ?, ?)', array('$user_name', '$user_email', '$user_pswd'));
		}

		Public static function get_data(){
			$data = array();
			
			$results = DB::table('user')->get();

			foreach ($results as $result){
				$row_array = array( 
					//"id"=>$result->id,
					"status"=>$result->status,
					"user_name"=>$result->user_name,
					"email"=>$result->user_email
				);
				array_push($data, $row_array);
			}

			echo json_encode($data);
		}
	}
	
?>