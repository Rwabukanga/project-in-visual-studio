<template>
<div class="container">
	<img src="src/assets/images/Soja.jpg">
<!-- <div class="panel-group"> -->
	
	<!-- <div class="panel-default"> -->
	<!-- <div class="oval"> -->
	<!--  <h2 class="panel-heading">Login Form</h2> -->
	<!-- <div class="panel-body"> -->
		
		<form v-on:submit.prevent= "login">
		<div class="row">
			
			 <div class="col-xs-20 col-sm-12 col-sm-offset col-md-3 col-md-offset-3">
			
			<label>Username</label>
		    <!-- <i class="fa fa-user" aria-hidden="true"></i>  -->
			<input  name="username" type="text"  class="form-control" id="username" v-model="dd.username" required>
			
		</div>
		</div>
		<br>
		<div class="row">
			 <div class="col-xs-12 col-sm-8 col-sm-offset col-md-3 col-md-offset-3">
			<label>Password</label>
			<input name="password" type="password"  class="form-control" id="password" v-model="dd.password" required>
		
		</div>
		 </div>
<br>
		<div class="row">
			<button  class="btn-sm btn-primary" type="submit">Log in</button>
			<button><a href="/reg">Sign Up</a></button>
		</div>
		</form>
	<!-- 	</div> -->
	<!-- </div> -->
<!-- </div> -->

<!-- </div> -->
</div>
</template>

<script>
export default {
	name: "login",

	data(){
		return{
			dd:{
				username:"",
				password:""
			}
		};
	},
	methods:{
      login: function(){
		  this.$store.dispatch('login', this.dd)
		 
	  }
	},



};
</script>
<style scoped>
/* 
body{
	background-image: 'url(src/assets/images/Soja.jpg)';
} */

/* .panel-group{
background-color: white; */
/* color: white; */
/* margin-left: 50px;
margin-right: 50px;

}
 */
/* a{
	color: white;
} */
/* form{
	
	margin: 10px 10px 10px 10px;
    color:black;
	
	

} */
/* .oval {
      width: 500px;
      height: 400px;
      background:blue;
      border-radius: 100px / 50px;
	  margin-left: 400px;
	
    } */
  

button{
	margin-left: 10px;
	margin-right: 95px;
	height: 30px;
	width: 80px;
}
/* .panel-heading{
	margin-top:100px;
	margin-left: 110px;
	margin-right:145px;
	margin-bottom: 100px;
	color: rgb(32, 25, 25);
	padding: 5px 5px 5px 5px;
	color: white;
	

} */

/* .panel-body{
	margin-top: 10px;
	margin-left: 20px;
	margin-right: 10px;
	
} */
input{
  width: 210px;
  height: 30px;
  box-sizing: border-box;
}

/* .container{
	
    background-image: 'url(src/assets/images/Soja.jpg)';
} */
</style>